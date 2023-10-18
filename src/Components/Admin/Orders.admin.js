import React from "react";

import { Col, Flex, Row, Space, Table, Tag, Layout, theme } from "antd";

import classes from "./Style.admin.module.css";

import { SearchOutlined, MoreOutlined } from "@ant-design/icons";

import { Input, Typography, Card } from "antd";

import { PlusSquareOutlined, EyeOutlined } from "@ant-design/icons";

import DashboardAdmin from "./Dashboard.admin";

export default function OrdersAdmin() {
  const { Title } = Typography;
  const columnsTableShops = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      width: 100,
    },
    {
      title: "Tracking Number",
      dataIndex: "trackingNo",
      key: "trackingNo",
      width: 250,
    },
    {
      title: "Delivery Fee",
      dataIndex: "deliveryFee",
      key: "deliveryFee",
      width: 130,
    },

    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 100,
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 150,
    },
    {
      title: "Shipping Address",
      dataIndex: "shippingAddress",
      key: "shippingAddress",
      width: 150,
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
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "2",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "3",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined style={{ fontSize: "20px", cursor: "pointer" }} />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined />,
    },
    {
      key: "4",
      logo: (
        <PlusSquareOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      ),
      trackingNo: 3252343424,
      deliveryFee: "$712",
      total: "$23",
      orderDate: "2 months ago",
      status: "Order Processing",
      shippingAddress: "mermoz, Dakar, Dakar, 38169, Sénégal",
      actions: <EyeOutlined />,
    },
  ];

  const { Header, Content, Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <DashboardAdmin />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <Card
            span={24}
            style={{
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <Flex horizontal justify="space-between" wrap="wrap">
              <Col span={12}>
                <Title level={3}>Orders</Title>
              </Col>
              <Col span={10}>
                <Input
                  size="large"
                  placeholder="Search by Tracking Number"
                  prefix={<SearchOutlined />}
                  style={{ marginTop: "15px" }}
                />
              </Col>
              <Col span={2}>
                <MoreOutlined
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                />
              </Col>
            </Flex>
          </Card>

          <Table
            className={classes.tableOrdersDetails}
            columns={columnsTableShops}
            dataSource={dataTableShops}
            scroll={{ x: "100%" }}
          />
        </Content>
      </Layout>
    </>
  );
}
