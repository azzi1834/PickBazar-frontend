import React, { useState } from "react";

import { Col, Flex, Row, Space, Table, Tag, Layout, theme, Select } from "antd";

import classes from "./Style.vendor.module.css";

import {
  SearchOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import { Input, Typography, Card, Divider } from "antd";

export default function VendorProducts() {
  const [showMore, setShowMore] = useState("down");

  const handleArrows = () => {
    setShowMore(showMore === "down" ? "up" : "down");
  };
  const { Option } = Select;

  const { Title } = Typography;

  const columnsTableShops = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 400,
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
      width: 100,
    },

    {
      title: "Shop",
      dataIndex: "shop",
      key: "shop",
      width: 150,
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
      width: 250,
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
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 400,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 400,
    },
  ];

  const dataTableShops = [
    {
      key: "1",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
    {
      key: "2",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
    {
      key: "3",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
    {
      key: "4",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
    {
      key: "5",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
    {
      key: "6",
      image: "abc",
      name: "Apples",
      group: "Grocery",
      shop: "Grocery Shop",
      productType: "Simple",
      price: 2309,
      quantity: 24,
      status: "Publish",
      actions: "Delete",
    },
  ];
  const { Header, Content, Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Card
        span={24}
        style={{
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Flex horizontal justify="start">
          <Col span={12}>
            <Title level={3}>Products</Title>
          </Col>
          <Col span={9}>
            <Input
              size="large"
              placeholder="Search by Name"
              prefix={<SearchOutlined />}
              style={{ marginTop: "15px" }}
            />
          </Col>
          <Col span={3}>
            <Title level={4}>
              {showMore === "down" ? (
                <strong className={classes.filter} onClick={handleArrows}>
                  Filter
                  <ArrowDownOutlined />
                </strong>
              ) : (
                <strong className={classes.filter} onClick={handleArrows}>
                  Filter
                  <ArrowUpOutlined />
                </strong>
              )}
            </Title>
          </Col>
        </Flex>
        {showMore === "up" ? (
          <div>
            <Divider />
            <Flex horizontal justify="start">
              <Col span={12}>
                <label htmlFor="dropdown">
                  <strong>Filter by Group</strong>
                </label>
                <Select
                  showSearch
                  size="large"
                  style={{ width: "90%", marginTop: "8px" }}
                  placeholder="Filter by Group"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="option1">Grocery</Option>
                  <Option value="option2">Bakery</Option>
                  <Option value="option3">Makeup</Option>
                </Select>
              </Col>
              <Col span={12}>
                <label htmlFor="dropdown">
                  <strong>Filter by Category</strong>
                </label>
                <Select
                  showSearch
                  size="large"
                  style={{ width: "90%", marginTop: "8px" }}
                  placeholder="Filter by Category"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="option1">Fruits and Vegetables</Option>
                  <Option value="option2">Choclates</Option>
                  <Option value="option3">Crisps</Option>
                </Select>
              </Col>
            </Flex>
          </div>
        ) : (
          ""
        )}
      </Card>

      <Table
        className={classes.tableShopDetails}
        columns={columnsTableShops}
        dataSource={dataTableShops}
        scroll={{ x: "100%" }}
      />
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
          <Card
            span={24}
            style={{
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <Flex horizontal justify="start">
              <Col span={12}>
                <Title level={3}>Products</Title>
              </Col>
              <Col span={9}>
                <Input
                  size="large"
                  placeholder="Search by Name"
                  prefix={<SearchOutlined />}
                  style={{ marginTop: "15px" }}
                />
              </Col>
              <Col span={3}>
                <Title level={4}>
                  {showMore === "down" ? (
                    <strong className={classes.filter} onClick={handleArrows}>
                      Filter
                      <ArrowDownOutlined />
                    </strong>
                  ) : (
                    <strong className={classes.filter} onClick={handleArrows}>
                      Filter
                      <ArrowUpOutlined />
                    </strong>
                  )}
                </Title>
              </Col>
            </Flex>
            {showMore === "up" ? (
              <div>
                <Divider />
                <Flex horizontal justify="start">
                  <Col span={12}>
                    <label htmlFor="dropdown">
                      <strong>Filter by Group</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "90%", marginTop: "8px" }}
                      placeholder="Filter by Group"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Grocery</Option>
                      <Option value="option2">Bakery</Option>
                      <Option value="option3">Makeup</Option>
                    </Select>
                  </Col>
                  <Col span={12}>
                    <label htmlFor="dropdown">
                      <strong>Filter by Category</strong>
                    </label>
                    <Select
                      showSearch
                      size="large"
                      style={{ width: "90%", marginTop: "8px" }}
                      placeholder="Filter by Category"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="option1">Fruits and Vegetables</Option>
                      <Option value="option2">Choclates</Option>
                      <Option value="option3">Crisps</Option>
                    </Select>
                  </Col>
                </Flex>
              </div>
            ) : (
              ""
            )}
          </Card>

          <Table
            className={classes.tableShopDetails}
            columns={columnsTableShops}
            dataSource={dataTableShops}
            scroll={{ x: "100%" }}
          />
        </Content>
      </Layout> */}
    </>
  );
}
