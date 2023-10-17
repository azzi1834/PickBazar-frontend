import React from "react";

import DashbaordIcon from "./Icons/Dashboard.admin.svg";
import ShopsIcon from "./Icons/Shops.admin.svg";
import ProductsIcon from "./Icons/Products.admin.svg";
import SettingsIcon from "./Icons/Settings.admin.svg";
import OrdersIcon from "./Icons/Orders.admin.svg";
import ReviewsIcon from "./Icons/Reviews.admin.svg";
import DollarIcon from "./Icons/Dollar.admin.svg";
import OrderBucketIcon from "./Icons/OrderBucket.admin.svg";
import RevenueIcon from "./Icons/Revenue.admin.svg";

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
import { Column } from "@ant-design/charts";

import NavbarAdmin from "./Navbar.admin";

import classes from "./Style.admin.module.css";

import { Space, Table, Tag } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import ShopsAdmin from "./Shops.admin";

const columnsTableOrders = [
  {
    title: "Tracking Number",
    dataIndex: "trackingNo",
    key: "trackingNo",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];
const dataTableOrders = [
  {
    key: "1",
    trackingNo: "John Brown",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "2",
    trackingNo: "John Brown",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "3",
    trackingNo: "John Brown",
    total: 32,
    orderDate: "1 oct 2032",
    status: "pending",
  },
  {
    key: "4",
    trackingNo: "John Brown",
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
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },

  {
    title: "Created",
    dataIndex: "created",
    key: "created",
  },

  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
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
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
  },

  {
    title: "Shop",
    dataIndex: "shop",
    key: "shop",
  },

  {
    title: "Price/Unit",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
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
    { month: "February", sales: 1500 },
    { month: "March", sales: 10 },
    { month: "April", sales: 152 },
    { month: "May", sales: 1000 },
    { month: "June", sales: 140 },
    { month: "July", sales: 500 },
    { month: "August", sales: 200 },
    { month: "September", sales: 1500 },
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
      <NavbarAdmin />
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 80,
            bottom: 0,
            right: 0,
            width: "300px",
            maxWidth: "300px",
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="light" mode="inline">
            <Menu.Item>
              <Image src={DashbaordIcon} alt="" width={20} />
              <span className={classes.Siderbaricon}>Dashboard</span>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/shops"}>
                <Image src={ShopsIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Shops</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Image src={ProductsIcon} alt="" width={20} />
              <span className={classes.Siderbaricon}>Products</span>
            </Menu.Item>
            <Menu.Item>
              <Image src={ReviewsIcon} alt="ReviewsIcon" width={20} />
              <span className={classes.Siderbaricon}>Reviews</span>
            </Menu.Item>
            <Menu.Item>
              <Image src={OrdersIcon} alt="OrdersIcon" width={20} />
              <span className={classes.Siderbaricon}>Orders</span>
            </Menu.Item>
            <Menu.Item>
              <Image src={SettingsIcon} alt="SettingsIcon" width={20} />
              <span className={classes.Siderbaricon}>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
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
                  />
                </Col>
              </Row>
            </div>
          </Content>
          <Routes>
            <Route path="/admin/shops" element={<ShopsAdmin />}></Route>
          </Routes>
        </Layout>
      </Layout>
    </>
  );
}
