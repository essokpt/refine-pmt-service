import React, { useState } from "react";
import {
  BaseRecord,
  HttpError,
  useApiUrl,
  useCustom,
  useList,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
  CreateButton,
  TextField,
  useModalForm,
  SaveButton,
  useModal,
  useFileUploadState,
} from "@refinedev/antd";
import {
  Table,
  Space,
  Row,
  Col,
  Button,
  Modal,
  Input,
  Form,
  Upload,
  Breadcrumb,
  Divider,
} from "antd";
import { IFile } from "./interface";
import {
  FileOutlined,
  FolderAddOutlined,
  FolderFilled,
  HomeOutlined,
  LeftOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export const FileManagerList = () => {
  const [path, setpath] = useState("/");
  const { show, modalProps, close } = useModal();
  const apiUrl = useApiUrl();
  const query = encodeURIComponent(path);
  const { isLoading: filLoading } = useFileUploadState();
  const { data, isLoading, refetch } = useCustom<any>({
    url: `${apiUrl}/fileManager/fileList${query}`,
    method: "get",
    config: {
      query: {
        title: "Foo bar",
      },
    },
  });

  const files = data?.data ?? [];

  const {
    modalProps: createModalProps,
    formProps: createFormProps,
    show: createModalShow,
    close: closeModal,
  } = useModalForm<IFile>({
    action: "create",
    autoSubmitClose: true,
    warnWhenUnsavedChanges: false,
  });

  const openFile = (file: any) => {
    console.log("view file", file.path + "/" + file.filename);
    window.open(
      `http://127.0.0.1:3000${file.path + "/" + file.filename}`,
      "_blank",
      "noreferrer"
    );
  };

  const onFinishHandler = async (values: any) => {
    console.log("onFinishHandler:", values);
    const newDir = {
      directoryName: path + "/" + values.directoryName,
    };

    console.log("new dir:", newDir);
    const response = await fetch(`${apiUrl}/fileManager/create-directory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDir),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
    } else {
      console.error("Error:", response.status, response.statusText);
    }
    closeModal();
    refetch();
  };

  const handleChangeFileUpload = () => {
    if (filLoading) {
      console.log("uploading...");
    } else {
      setTimeout(() => {
        console.log("upload finish");
        close();
        refetch();
      }, 2000);
    }
  };

  const handleBackPath = () => {
    console.log("handleBackPath:", path);
    setpath("/");
  };

  return (
    <div>
      <List
        headerButtons={
          <>
            <Button
              type="primary"
              icon={<FolderAddOutlined />}
              onClick={() => createModalShow()}
            >
              New Folder
            </Button>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              onClick={() => show()}
            >
              Upload File
            </Button>
          </>
        }
        title="File Management"
      />
      <div>
        <Button
          type="text"
          icon={<HomeOutlined />}
          onClick={() => setpath("/")}
        >
          Home {path}
        </Button>
      </div>
      <Divider/>
     
      <Row>
        {files.map((item: IFile) => (
          <Col span={2}>
            {item.isDir ? (
              <>
                <FolderFilled
                  type="setting"
                  style={{ fontSize: "45px", color: "#08c" }}
                  onDoubleClick={() => setpath(item.path + "/" + item.filename)}
                />
                <br />
                <TextField value={item.filename.substring(0, 10)} />
              </>
            ) : (
              <>
                <FileOutlined
                  type="setting"
                  style={{ fontSize: "45px", color: "" }}
                  onDoubleClick={() => openFile(item)}
                  //onDoubleClick={()=> downloadFile(item)}
                />
                <br />
                <TextField value={item.filename.substring(0, 10)} />
              </>
            )}
          </Col>
        ))}
      </Row>

      <Modal
        {...createModalProps}
        width={450}
        title="Create New Folder"
        //  footer={[
        //   <Button key="submit" type="primary" onClick={onFinishHandler}>
        //     OK
        //   </Button>,
        // ]}
      >
        <Form
          {...createFormProps}
          onFinish={onFinishHandler}
          autoSave="true"
          layout="vertical"
        >
          <Form.Item label="Folder Name" name="directoryName">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal {...modalProps} footer={null}>
        <p>Upload Files</p>
        <Upload.Dragger
          name="files"
          action={`${apiUrl}/fileManager/uploadMultiFiles${encodeURIComponent(path)}`}
          listType="picture"
          maxCount={10}
          multiple
          onChange={handleChangeFileUpload}
        >
          <p className="ant-upload-text">Drag & drop a file in this area</p>
        </Upload.Dragger>
      </Modal>
    </div>
  );
};
