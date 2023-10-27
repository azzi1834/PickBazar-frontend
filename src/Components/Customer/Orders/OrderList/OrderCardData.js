import React, { useState, useEffect } from "react";

import classes from "./OrderList.module.css";

import { Card, Row, Col } from "antd";

export default function OrderCardData({ ordersData, handleOrderId }) {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (ordersData.length > 0) {
      handleOrderId(ordersData[0]._id);
    }
  }, [ordersData]);

  const formatDate = (date) => {
    const responseDate = new Date(date);

    const year = responseDate.getFullYear();

    const month = responseDate.getMonth() + 1;

    const day = responseDate.getDate();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };
  return (
    <div>
      <div className={classes.scrollList}>
        {ordersData.map((option, index) => {
          return (
            <Card
              key={index}
              title={"Order No#" + option._id}
              extra={option.OrderStatus}
              // className={classes.card}
              className={`${classes.card} ${
                selectedCard === index ? classes.selected_Card : ""
              }`}
              onClick={() => handleOrderId(option._id)}
            >
              <Row>
                <Col span={10}>Order Date</Col>
                <Col span={4}>:</Col>
                <Col span={10}>{formatDate(option.OrderDate)}</Col>
              </Row>
              <Row style={{ margin: "10px 0px" }}>
                <Col span={10}>Delivery Time</Col>
                <Col span={4}>:</Col>
                <Col span={10}>{option.DeliverySchedule}</Col>
              </Row>
              <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
                <Col span={10}>Amount</Col>
                <Col span={4}>:</Col>
                <Col span={10}>Rs.{option.Tax + option.ShippingCharge}</Col>
              </Row>
              <Row style={{ fontWeight: "bold", margin: "10px 0px" }}>
                <Col span={10}>Total Price</Col>
                <Col span={4}>:</Col>
                <Col span={10}>Rs.{option.Total}</Col>
              </Row>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
