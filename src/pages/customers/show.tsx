import React from "react";
import { useShow } from "@refinedev/core";
import {
    Show,
    NumberField,
    TextField,
    DateField,
} from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const CustomersShow = () => {
    const { query } = useShow();
    const { data, isLoading } = query;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            {/* <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} /> */}
            <Title level={5}>Eng Name</Title>
            <TextField value={record?.engName} />
            <Title level={5}>Thai Name</Title>
            <TextField value={record?.thaiName} />
            <Title level={5}>Short Name</Title>
            <TextField value={record?.shortName} />
            <Title level={5}>Address</Title>
            <TextField value={record?.address} />
            <Title level={5}>Subdistrict</Title>
            <TextField value={record?.subdistrict} />
            <Title level={5}>District</Title>
            <TextField value={record?.district} />
            <Title level={5}>Province</Title>
            <TextField value={record?.province} />
            <Title level={5}>Zipcode</Title>
            <NumberField value={record?.zipcode ?? ""} />
            <Title level={5}>Description</Title>
            <TextField value={record?.description} />
            <Title level={5}>Phone</Title>
            <TextField value={record?.phone} />
            <Title level={5}>Contact Name</Title>
            <TextField value={record?.contactName} />
            <Title level={5}>Distance</Title>
            <NumberField value={record?.distance ?? ""} />
            <Title level={5}>Remark</Title>
            <TextField value={record?.remark} />
            <Title level={5}>Created At</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
};
