import React from "react";

import { Col, Flex, Row, Space, Table, Tag } from "antd";

import classes from "./Style.admin.module.css";

import { UserOutlined } from "@ant-design/icons";

import { Input, Typography, Card } from "antd";

export default function ShopsAdmin() {
  const { Title } = Typography;
  const columnsTableShops = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Owner Name",
      dataIndex: "owner",
      key: "owner",
    },

    {
      title: "Products",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "Orders",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];

  const dataTableShops = [
    {
      key: "1",
      logo: "abc",
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: "Inactive",
      actions: "Delete",
    },
    {
      key: "2",
      logo: "abc",
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: "Inactive",
      actions: "Delete",
    },
    {
      key: "3",
      logo: "abc",
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: "Inactive",
      actions: "Delete",
    },
    {
      key: "4",
      logo: "abc",
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: "Inactive",
      actions: "Delete",
    },
  ];

  return (
    <>
      <Card
        style={{
          width: 1000,
          marginTop: 30,
          marginLeft: "23%",
        }}
      >
        <Flex horizontal justify="start">
          <div style={{ width: "50%" }}>
            <Title level={3}>Shops</Title>
          </div>
          <div>
            <Input
              size="large"
              placeholder="Search by Name"
              prefix={<UserOutlined />}
              style={{ top: 20, width: 500 }}
            />
          </div>
        </Flex>
      </Card>

      <Table
        className={classes.tablePopularProducts}
        columns={columnsTableShops}
        dataSource={dataTableShops}
      />
    </>
  );
}
