import React from "react";

import { Col, Flex, Row, Space, Table, Tag, Layout, theme, Image } from "antd";

import classes from "./Style.vendor.module.css";

import {
  SearchOutlined,
  EyeOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";

import { Input, Typography, Card } from "antd";

import bedImage from "./Icons/OrderBucket.svg";

export default function VendorShops() {
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
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusInactive}>Inactive</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
    {
      key: "2",
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusActive}>Active</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
    {
      key: "3",
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusInactive}>Inactive</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
    {
      key: "4",
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusInactive}>Inactive</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
    {
      key: "4",
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusInactive}>Inactive</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
    {
      key: "4",
      logo: <Image src={bedImage} width={40} />,
      name: "Furniture Shop",
      owner: "Store owner",
      products: 23,
      orders: 44,
      status: <div className={classes.shopStatusInactive}>Inactive</div>,
      actions: (
        <div>
          <CloseCircleFilled
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "20px",
            }}
          />
          <EyeOutlined
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingLeft: "20px",
              paddingRight: "0px",
            }}
          />{" "}
        </div>
      ),
    },
  ];
  const { Header, Content, Sider } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Card
        style={{
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Flex horizontal justify="start">
          <Col span={12}>
            <Title level={3}>Shops</Title>
          </Col>
          <Col span={12}>
            <Input
              size="large"
              placeholder="Search by Name"
              prefix={<SearchOutlined />}
              style={{ marginTop: "15px" }}
            />
          </Col>
        </Flex>
      </Card>
      <Table
        className={classes.tableShopDetails}
        columns={columnsTableShops}
        dataSource={dataTableShops}
        scroll={{ x: "100%" }}
      />

      {/* <div>
        <Layout
          className="site-layout"
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            className="content"
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <Card
              // span={24}
              style={{
                marginTop: 30,
                marginBottom: 20,
              }}
            >
              <Flex horizontal justify="start">
                <Col span={12}>
                  <Title level={3}>Shops</Title>
                </Col>
                <Col span={12}>
                  <Input
                    size="large"
                    placeholder="Search by Name"
                    prefix={<SearchOutlined />}
                    style={{ marginTop: "15px" }}
                  />
                </Col>
              </Flex>
            </Card>

          
          </Content>
        </Layout>
      </div> */}
    </>
  );
}
