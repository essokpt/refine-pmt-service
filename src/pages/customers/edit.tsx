import React from "react";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker, Row, Col } from "antd";
import dayjs from "dayjs";

export const CustomerEdit = () => {
  const { formProps, saveButtonProps  } = useForm();

  //const customerData = query?.data?.data;
 

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Row justify="start" gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Id"
              name={["id"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input readOnly disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Short Name"
              name={["shortName"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Eng Name"
              name={["engName"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Thai Name"
              name={["thaiName"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tax ID"
              name={["taxId"]}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Form.Item
            label="Address"
            name={["address"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Subdistrict"
            name={["subdistrict"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="District"
            name={["district"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Province"
            name={["province"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Zipcode"
            name={["zipcode"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Col span={24}>
            <Form.Item
              label="Description"
              name={["description"]}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
          <Form.Item
            label="Phone"
            name={["phone"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact Name"
            name={["contactName"]}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Distance"
            name={["distance"]}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Remark"
            name={["remark"]}
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Created At"
            name={["createdAt"]}
            rules={[
              {
                required: true,
              },
            ]}
            getValueProps={(value) => ({
              value: value ? dayjs(value) : undefined,
            })}
          >
            <DatePicker />
          </Form.Item>
        </Row>
      </Form>
    </Edit>
  );
};
