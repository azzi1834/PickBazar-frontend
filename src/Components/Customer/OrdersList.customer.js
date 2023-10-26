import React from "react";
import CustomerNavbar from "./Navbar.customer";

import { Typography, Card, Row, Col } from "antd";

export default function CustomerOrdersList() {
  const { Title } = Typography;

  const orderlistItems = [
    {
      OrderStatus: "Pending",
      OrderDate: "October 23,2023",
      DeliveryTime: "Express",
      Amount: 30,
      TotalPrice: 50,
    },
    {
      OrderStatus: "Pending",
      OrderDate: "October 25,2023",
      DeliveryTime: "Morning",
      Amount: 30,
      TotalPrice: 50,
    },
    {
      OrderStatus: "Pending",
      OrderDate: "October 29,2023",
      DeliveryTime: "Evening",
      Amount: 30,
      TotalPrice: 50,
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
        <Title level={4}>My Orders</Title>
        {/* <Card
          title="Order No#233"
          extra={"Order Pending"}
          style={{ width: 300, backgroundColor: "#edebeb" }}
        >
          <Row>
            <Col span={10}>Order Date</Col>
            <Col span={4}>:</Col>
            <Col span={10}>October 23,2023</Col>
          </Row>
          <Row style={{ margin: "10px 0px" }}>
            <Col span={10}>Delivery Time</Col>
            <Col span={4}>:</Col>
            <Col span={10}>Express</Col>
          </Row>
          <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
            <Col span={10}>Amount</Col>
            <Col span={4}>:</Col>
            <Col span={10}>${23}</Col>
          </Row>
          <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
            <Col span={10}>Total Price</Col>
            <Col span={4}>:</Col>
            <Col span={10}>${55}</Col>
          </Row>
        </Card> */}
        {orderlistItems.map((option, index) => {
          return (
            <Card
              title="Order No#233"
              extra={option.OrderStatus}
              style={{
                // width: 300,
                backgroundColor: "rgb(237, 235, 235,0.5)",
                margin: "10px",
                cursor: "pointer",
                overflowY: "scroll",
              }}
            >
              <Row>
                <Col span={10}>Order Date</Col>
                <Col span={4}>:</Col>
                <Col span={10}>{option.OrderDate}</Col>
              </Row>
              <Row style={{ margin: "10px 0px" }}>
                <Col span={10}>Delivery Time</Col>
                <Col span={4}>:</Col>
                <Col span={10}>{option.DeliveryTime}</Col>
              </Row>
              <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
                <Col span={10}>Amount</Col>
                <Col span={4}>:</Col>
                <Col span={10}>${option.Amount}</Col>
              </Row>
              <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
                <Col span={10}>Total Price</Col>
                <Col span={4}>:</Col>
                <Col span={10}>${option.TotalPrice}</Col>
              </Row>
            </Card>
          );
        })}
      </div>
    </>
  );
}
