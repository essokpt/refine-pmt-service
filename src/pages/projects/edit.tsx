import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input,  Select } from "antd";
//import dayjs from "dayjs";
import { IEmployee } from "../employees/interface";
import { ICustomer } from "../customers/interface";

export const ProjectEdit = () => {
  const { formProps, saveButtonProps } = useForm();

  //const projectData = query?.data?.data;
  const { selectProps: customerSelete  } =
        useSelect<ICustomer>({
            resource: "customer",
            optionLabel: (item) => `${item.thaiName}`,
            // optionValue: (item) => item.id
        });
   // const categories = categoriesResult?.data?.data;

  const { selectProps } = useSelect<IEmployee>({
    resource: "employee",
    optionLabel: (item) => `${item.firstName}`,
    optionValue: (item) => item.firstName
   
  });

  // const handleOnFinish = (values) => {
  //   onFinish({
  //     fullName: `${values.name} ${values.surname}`,
  //   });
  //   console.log(values);
    
  // };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" >
        <Form.Item
          label="Project Number"
          name={["projectNumber"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Project Name"
          name={["projectName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Customer"
          name={["customerId"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
           <Select
            placeholder="Select a customer"
            style={{ width: 300 }}
            {...customerSelete}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label="Contact Number"
          name={["contactNumber"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name={["startDate"]}
          rules={[
            {
              required: true,
            },
          ]}
          // getValueProps={(value) => ({
          //     value: value ? dayjs(value) : undefined,
          // })}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="End Date"
          name={["endDate"]}
          rules={[
            {
              required: true,
            },
          ]}
          // getValueProps={(value) => ({
          //     value: value ? dayjs(value) : undefined,
          // })}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Project Manager"
          name={["projectManager"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a employee"
            style={{ width: 300 }}
            {...selectProps}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name={["status"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: "New",
                value: "New",
              },
              {
                label: "On Process 20%",
                value: "On Process 20%",
              },
              {
                label: "On Process 50%",
                value: "On Process 50%",
              },
              {
                label: "On Process 75%",
                value: "On Process 75%",
              },
              {
                label: "On testing to handover",
                value: "On testing to handover",
              },
              {
                label: "Completed",
                value: "Completed",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
