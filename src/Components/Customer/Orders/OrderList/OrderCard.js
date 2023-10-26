import React from "react";

import { Card, Row, Col } from "antd";

import classes from "./OrderList.module.css";

export default function OrderCard() {
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
      Amount: 100,
      TotalPrice: 500,
    },
    {
      OrderStatus: "Pending",
      OrderDate: "October 29,2023",
      DeliveryTime: "Evening",
      Amount: 300,
      TotalPrice: 790,
    },
  ];

  return (
    <>
      <div className={classes.scrollList}>
        {orderlistItems.map((option, index) => {
          return (
            <Card
              title="Order No#233"
              extra={option.OrderStatus}
              className={classes.card}
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
