import React from "react";

import { Col, Flex, Row, Space, Table, Tag, Layout, theme, Image } from "antd";

import classes from "./Style.admin.module.css";

import {
  DeleteTwoTone,
  StarFilled,
  CheckCircleFilled,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";

import { Input, Typography, Card } from "antd";

import DashboardAdmin from "./Dashboard.admin";

import bedImage from "./Icons/OrderBucket.admin.svg";

export default function ReviewsAdmin() {
  const { Title } = Typography;
  const columnsTableShops = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 120,
    },
    {
      title: "Customer Review",
      dataIndex: "customerReview",
      key: "customerReview",
      width: 300,
    },
    {
      title: "Ratings",
      dataIndex: "ratings",
      key: "ratings",
      width: 150,
    },

    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      width: 150,
    },
    {
      title: "Reports",
      dataIndex: "reports",
      key: "reports",
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 150,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: 100,
    },
  ];

  const dataTableShops = [
    {
      key: "1",
      image: <Image src={bedImage} width={40} />,
      customerReview: (
        <div>
          <p style={{ marginTop: "0px" }}>
            By{" "}
            <strong>
              Customer2{" "}
              <span>
                <CheckCircleFilled />
              </span>
            </strong>
          </p>
          <p>Book is good but had to wait for a late delivery.</p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginRight: "15px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <LikeFilled /> <span>0</span>
            </p>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <DislikeFilled /> <span>0</span>
            </p>
          </div>
        </div>
      ),
      ratings: (
        <div className={classes.reviewContainer}>
          3
          <span style={{ paddingLeft: "4px" }}>
            <StarFilled />
          </span>
        </div>
      ),
      products: "	Milan The Story of Love",
      reports: <div style={{ textAlign: "center" }}>0</div>,
      date: "2 years ago",
      actions: (
        <DeleteTwoTone
          twoToneColor={"#ab0a0a"}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      ),
    },
    {
      key: "2",
      image: <Image src={bedImage} width={40} />,
      customerReview: (
        <div>
          <p style={{ marginTop: "0px" }}>
            By{" "}
            <strong>
              Customer2{" "}
              <span>
                <CheckCircleFilled />
              </span>
            </strong>
          </p>
          <p>Book is good but had to wait for a late delivery.</p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginRight: "15px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <LikeFilled /> <span>0</span>
            </p>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <DislikeFilled /> <span>0</span>
            </p>
          </div>
        </div>
      ),
      ratings: (
        <div className={classes.reviewContainer}>
          1
          <span style={{ paddingLeft: "4px" }}>
            <StarFilled />
          </span>
        </div>
      ),
      products: "	Milan The Story of Love",
      reports: <div style={{ textAlign: "center" }}>0</div>,
      date: "2 years ago",
      actions: (
        <DeleteTwoTone
          twoToneColor={"#ab0a0a"}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      ),
    },
    {
      key: "3",
      image: <Image src={bedImage} width={40} />,
      customerReview: (
        <div>
          <p style={{ marginTop: "0px" }}>
            By{" "}
            <strong>
              Customer2{" "}
              <span>
                <CheckCircleFilled />
              </span>
            </strong>
          </p>
          <p>Book is good but had to wait for a late delivery.</p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginRight: "15px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <LikeFilled /> <span>0</span>
            </p>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <DislikeFilled /> <span>0</span>
            </p>
          </div>
        </div>
      ),
      ratings: (
        <div className={classes.reviewContainer}>
          4
          <span style={{ paddingLeft: "4px" }}>
            <StarFilled />
          </span>
        </div>
      ),
      products: "	Milan The Story of Love",
      reports: <div style={{ textAlign: "center" }}>0</div>,
      date: "2 years ago",
      actions: (
        <DeleteTwoTone
          twoToneColor={"#ab0a0a"}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      ),
    },
    {
      key: "4",
      image: <Image src={bedImage} width={40} />,
      customerReview: (
        <div>
          <p style={{ marginTop: "0px" }}>
            By{" "}
            <strong>
              Customer2{" "}
              <span>
                <CheckCircleFilled />
              </span>
            </strong>
          </p>
          <p>Book is good but had to wait for a late delivery.</p>
          <div style={{ display: "flex" }}>
            <p
              style={{
                marginRight: "15px",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            >
              <LikeFilled /> <span>0</span>
            </p>
            <p style={{ marginTop: "0px", marginBottom: "0px" }}>
              <DislikeFilled /> <span>0</span>
            </p>
          </div>
        </div>
      ),
      ratings: (
        <div className={classes.reviewContainer}>
          5
          <span style={{ paddingLeft: "4px" }}>
            <StarFilled />
          </span>
        </div>
      ),
      products: "	Milan The Story of Love",
      reports: <div style={{ textAlign: "center" }}>0</div>,
      date: "2 years ago",
      actions: (
        <DeleteTwoTone
          twoToneColor={"#ab0a0a"}
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
      ),
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
            <Flex horizontal justify="start">
              <Col span={24}>
                <Title level={3}>Reviews</Title>
              </Col>
            </Flex>
          </Card>

          <Table
            className={classes.tableReviews}
            columns={columnsTableShops}
            dataSource={dataTableShops}
            scroll={{ x: "100%" }}
          />
        </Content>
      </Layout>
    </>
  );
}
