import React from "react";

import ShopsIcon from "./Icons/Shops.svg";
import DollarIcon from "./Icons/Dollar.svg";
import OrderBucketIcon from "./Icons/OrderBucket.svg";
import RevenueIcon from "./Icons/Revenue.svg";

import {
  Layout,
  Menu,
  theme,
  Image,
  Card,
  Flex,
  Typography,
  Row,
  Col,
} from "antd";

import { PlusSquareOutlined } from "@ant-design/icons";

import { Column } from "@ant-design/charts";

import classes from "./Style.admin.module.css";

import { Table } from "antd";

import DashboardAdmin from "./Dashboard.admin";

const columnsTableOrders = [
  {
    title: "",
    dataIndex: "iconPlus",
    key: "iconPlus",
  },
  {
    title: "Tracking Number",
    dataIndex: "trackingNo",
    key: "trackingNo",
    width: 200,
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
    width: 200,
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 300,
  },
];
const dataTableOrders = [
  {
    key: "1",
    iconPlus: <PlusSquareOutlined />,
    trackingNo: "3242343243253",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "2",
    iconPlus: <PlusSquareOutlined />,
    trackingNo: "3242343243253",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "3",
    iconPlus: <PlusSquareOutlined />,
    trackingNo: "3242343243253",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "4",
    iconPlus: <PlusSquareOutlined />,
    trackingNo: "3242343243253",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
];
const columnsTableWithdrawals = [
  {
    title: "Shop Name",
    dataIndex: "shopName",
    key: "shopName",
    width: 500,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: 200,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 200,
  },

  {
    title: "Created",
    dataIndex: "created",
    key: "created",
    width: 300,
  },

  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: 400,
  },
];
const dataTableWithdrawals = [
  {
    key: "1",
    shopName: "John Brown",
    amount: 32,
    status: "pending",
    created: "1 oct 2032",
    actions: "1 oct 2032",
  },
  {
    key: "2",
    shopName: "John Brown",
    amount: 32,
    status: "pending",
    created: "1 oct 2032",
    actions: "1 oct 2032",
  },
  {
    key: "3",
    shopName: "John Brown",
    amount: 32,
    status: "pending",
    created: "1 oct 2032",
    actions: "1 oct 2032",
  },
  {
    key: "4",
    shopName: "John Brown",
    amount: 32,
    status: "pending",
    created: "1 oct 2032",
    actions: "1 oct 2032",
  },
];

const columnsTablePopularProducts = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 200,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 500,
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    width: 200,
  },

  {
    title: "Shop",
    dataIndex: "shop",
    key: "shop",
    width: 500,
  },

  {
    title: "Price/Unit",
    dataIndex: "price",
    key: "price",
    width: 200,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: 300,
  },
];
const dataTablePopularProducts = [
  {
    key: "1",
    id: 1,
    name: "Apples",
    group: "Grocery",
    shop: "Grocery Shop",
    price: "23",
    quantity: "25",
  },
  {
    key: "2",
    id: 2,
    name: "Apples",
    group: "Grocery",
    shop: "Grocery Shop",
    price: "23",
    quantity: "25",
  },
  {
    key: "3",
    id: 3,
    name: "Apples",
    group: "Grocery",
    shop: "Grocery Shop",
    price: "23",
    quantity: "25",
  },
  {
    key: "4",
    id: 4,
    name: "Apples",
    group: "Grocery",
    shop: "Grocery Shop",
    price: "23",
    quantity: "25",
  },
];

const titleWithdrawals = () => (
  <div style={{ textAlign: "center" }}>
    <h3>Recent Withdrawals</h3>
  </div>
);
const titleOrders = () => (
  <div style={{ textAlign: "center" }}>
    <h3>Recent Orders</h3>
  </div>
);
const popularProducts = () => (
  <div style={{ textAlign: "center" }}>
    <h3>Popular Products</h3>
  </div>
);
const { Header, Content, Sider } = Layout;

export default function HomepageAdmin() {
  const { Text, Title } = Typography;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = [
    { month: "January", sales: 190 },
    { month: "February", sales: 700 },
    { month: "March", sales: 10 },
    { month: "April", sales: 152 },
    { month: "May", sales: 500 },
    { month: "June", sales: 140 },
    { month: "July", sales: 500 },
    { month: "August", sales: 200 },
    { month: "September", sales: 600 },
    { month: "October", sales: 100 },
    { month: "November", sales: 150 },
    { month: "December", sales: 151 },
  ];

  const config = {
    data,
    xField: "month",
    yField: "sales",
    height: 400,
    color: "rgb(25, 182, 182)",
    // seriesField: "month",
    isGroup: true,
    label: {
      position: "middle",
      style: {
        fill: "#fff",
      },
    },
  };

  return (
    <>
      <div>
        <Row>
          <Col flex="1 1 200px">
            <Card
              style={{
                width: 270,
                marginTop: 30,
              }}
            >
              <div className={classes.cardHeader}>
                <div>
                  <Title level={5}>Total Revenue</Title>
                  <Text type="secondary">
                    <strong>(Last 30 Days)</strong>
                  </Text>
                </div>
                <div className={classes.dollarIconDiv}>
                  <Image src={DollarIcon} width={20}></Image>
                </div>
              </div>
              <Title level={3}>$0.00</Title>
            </Card>
          </Col>
          <Col flex="1 1 200px">
            <Card
              style={{
                width: 270,
                marginTop: 30,
              }}
            >
              <div className={classes.cardHeader}>
                <div>
                  <Title level={5}>Total Orders</Title>
                  <Text type="secondary">
                    <strong>(Last 30 Days)</strong>
                  </Text>
                </div>
                <div className={classes.orderIconDiv}>
                  <Image src={OrderBucketIcon}></Image>
                </div>
              </div>

              <Title level={3}>0</Title>
            </Card>
          </Col>
          <Col flex="1 1 200px">
            {" "}
            <Card
              style={{
                width: 270,
                marginTop: 30,
              }}
            >
              <div className={classes.cardHeader}>
                <Title level={5}>Todays Revenue</Title>
                <div className={classes.revenueIconDiv}>
                  <Image src={RevenueIcon}></Image>
                </div>
              </div>
              <Title level={3}>$0.00</Title>
            </Card>
          </Col>
          <Col flex="1 1 200px">
            {" "}
            <Card
              style={{
                width: 270,
                marginTop: 30,
              }}
            >
              <div className={classes.cardHeader}>
                <Title level={5}>Total Shops</Title>
                <div className={classes.shopIconDiv}>
                  <Image src={ShopsIcon} width={30}></Image>
                </div>
              </div>
              <Title level={3}>0</Title>
            </Card>
          </Col>
        </Row>
        <Row className={classes.chart}>
          <Col span={24}>
            <Column {...config} />
          </Col>
        </Row>
        <Row className={classes.tables}>
          <Col flex="1 1 200px">
            <Table
              className={classes.tableOrders}
              columns={columnsTableOrders}
              dataSource={dataTableOrders}
              pagination={false}
              title={titleOrders}
              scroll={{ x: "100%" }}
            />
          </Col>
          <Col flex="1 1 200px">
            {" "}
            <Table
              className={classes.tableWithdrawals}
              columns={columnsTableWithdrawals}
              dataSource={dataTableWithdrawals}
              pagination={false}
              title={titleWithdrawals}
              scroll={{ x: "100%" }}
            />
          </Col>
        </Row>
        <Row className={classes.popularProducts}>
          <Col span={24}>
            <Table
              className={classes.tablePopularProducts}
              columns={columnsTablePopularProducts}
              dataSource={dataTablePopularProducts}
              pagination={false}
              title={popularProducts}
              scroll={{ x: "100%" }}
            />
          </Col>
        </Row>
      </div>
      {/* <DashboardAdmin />

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
          <div>
            <Row>
              <Col flex="1 1 200px">
                <Card
                  style={{
                    width: 270,
                    marginTop: 30,
                  }}
                >
                  <div className={classes.cardHeader}>
                    <div>
                      <Title level={5}>Total Revenue</Title>
                      <Text type="secondary">
                        <strong>(Last 30 Days)</strong>
                      </Text>
                    </div>
                    <div className={classes.dollarIconDiv}>
                      <Image src={DollarIcon} width={20}></Image>
                    </div>
                  </div>
                  <Title level={3}>$0.00</Title>
                </Card>
              </Col>
              <Col flex="1 1 200px">
                <Card
                  style={{
                    width: 270,
                    marginTop: 30,
                  }}
                >
                  <div className={classes.cardHeader}>
                    <div>
                      <Title level={5}>Total Orders</Title>
                      <Text type="secondary">
                        <strong>(Last 30 Days)</strong>
                      </Text>
                    </div>
                    <div className={classes.orderIconDiv}>
                      <Image src={OrderBucketIcon}></Image>
                    </div>
                  </div>

                  <Title level={3}>0</Title>
                </Card>
              </Col>
              <Col flex="1 1 200px">
                {" "}
                <Card
                  style={{
                    width: 270,
                    marginTop: 30,
                  }}
                >
                  <div className={classes.cardHeader}>
                    <Title level={5}>Todays Revenue</Title>
                    <div className={classes.revenueIconDiv}>
                      <Image src={RevenueIcon}></Image>
                    </div>
                  </div>
                  <Title level={3}>$0.00</Title>
                </Card>
              </Col>
              <Col flex="1 1 200px">
                {" "}
                <Card
                  style={{
                    width: 270,
                    marginTop: 30,
                  }}
                >
                  <div className={classes.cardHeader}>
                    <Title level={5}>Total Shops</Title>
                    <div className={classes.shopIconDiv}>
                      <Image src={ShopsIcon} width={30}></Image>
                    </div>
                  </div>
                  <Title level={3}>0</Title>
                </Card>
              </Col>
            </Row>
            <Row className={classes.chart}>
              <Col span={24}>
                <Column {...config} />
              </Col>
            </Row>
            <Row className={classes.tables}>
              <Col flex="1 1 200px">
                <Table
                  className={classes.tableOrders}
                  columns={columnsTableOrders}
                  dataSource={dataTableOrders}
                  pagination={false}
                  title={titleOrders}
                  scroll={{ x: "100%" }}
                />
              </Col>
              <Col flex="1 1 200px">
                {" "}
                <Table
                  className={classes.tableWithdrawals}
                  columns={columnsTableWithdrawals}
                  dataSource={dataTableWithdrawals}
                  pagination={false}
                  title={titleWithdrawals}
                  scroll={{ x: "100%" }}
                />
              </Col>
            </Row>
            <Row className={classes.popularProducts}>
              <Col span={24}>
                <Table
                  className={classes.tablePopularProducts}
                  columns={columnsTablePopularProducts}
                  dataSource={dataTablePopularProducts}
                  pagination={false}
                  title={popularProducts}
                  scroll={{ x: "100%" }}
                />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout> */}
    </>
  );
}
