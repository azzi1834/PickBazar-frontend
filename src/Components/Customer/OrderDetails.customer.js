import React from "react";

import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Divider,
  Steps,
  Space,
  Table,
  Tag,
} from "antd";

import classes from "./Style.customer.module.css";

export default function CustomerOrderDetails() {
  const { Title, Text } = Typography;

  const columnsTableShops = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      width: 300,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
  ];

  const dataTableShops = [
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
  ];

  const items = [
    {
      title: "Order Pending",
    },
    {
      title: "Order Processing",
    },
    {
      title: "Order At Local Facility",
    },
    {
      title: "Order Out For Delivery",
    },
    {
      title: "Order Completed",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          paddingLeft: "40px",
          margin: "20px",
        }}
      >
        <Title level={4}>Orders Details - 3248324324</Title>
        <Row>
          <Col span={7}>
            <Title level={4}>Order Status:</Title>
            <Text
              style={{
                color: "rgb(206, 163, 53)",
                fontSize: "18px",
                border: "1px solid #f1e9d7",
                padding: "10px",
                borderRadius: "20px",
                backgroundColor: "#f1e9d7",
              }}
            >
              Order Pending
            </Text>
          </Col>
          <Col span={7}>
            <Title level={4}>Payment Status:</Title>
            <Text
              style={{
                color: "rgb(206, 163, 53)",
                fontSize: "18px",
                border: "1px solid #f1e9d7",
                padding: "10px",
                borderRadius: "20px",
                backgroundColor: "#f1e9d7",
              }}
            >
              Payment Pending
            </Text>
          </Col>
          <Col>
            <Button
              type="primary"
              size={"large"}
              style={{
                backgroundColor: "rgb(56,148,118)",
                fontWeight: "bold",
                marginRight: "20px",
                marginLeft: "10px",
              }}
            >
              Pay now
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              size={"large"}
              style={{
                backgroundColor: "rgb(56,148,118)",
                fontWeight: "bold",
              }}
            >
              Change Gateway
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Title level={5}>Shipping Address</Title>
            <Text type="secondary">mermoz, Dakar, Dakar, 38169, Sénégal</Text>
            <Title level={5}>Billing Address</Title>
            <Text type="secondary">
              Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus sint,
              51397, Aut fugiat iusto do
            </Text>
          </Col>
          <Col span={1}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#c7c8c9",
                height: "100%",
              }}
            />
          </Col>
          <Col span={7}>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <div style={{ marginRight: "auto" }}>
                <Text type="secondary">Sub Total</Text>
              </div>
              <div style={{ marginRight: "10px" }}>Rs.500</div>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <div style={{ marginRight: "auto" }}>
                <Text type="secondary">Discount</Text>
              </div>
              <div style={{ marginRight: "10px" }}>Rs.100</div>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <div style={{ marginRight: "auto" }}>
                <Text type="secondary">Delivery Fee</Text>
              </div>
              <div style={{ marginRight: "10px" }}>Rs.50</div>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <div style={{ marginRight: "auto" }}>
                <Text type="secondary">Tax</Text>
              </div>
              <div style={{ marginRight: "10px" }}>Rs.0.10</div>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <div style={{ marginRight: "auto" }}>
                <Text type="primary">
                  <strong>Total</strong>
                </Text>
              </div>
              <div style={{ marginRight: "10px" }}>Rs.710</div>
            </div>
          </Col>
          <Divider style={{ backgroundColor: "#c7c8c9" }} />
        </Row>
        <Row>
          <Col span={24}>
            <Steps
              current={1}
              labelPlacement="vertical"
              items={items}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              className={classes.tableShopDetails}
              columns={columnsTableShops}
              dataSource={dataTableShops}
              scroll={{ x: "100%" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
