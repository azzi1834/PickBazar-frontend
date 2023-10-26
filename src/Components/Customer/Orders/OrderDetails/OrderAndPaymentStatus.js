import React from "react";

import { Col, Row, Typography, Button, Flex } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderAndPaymentStatus() {
  const { Title, Text } = Typography;

  return (
    <>
      <Flex justify="space-around" align="center" wrap="wrap">
        <div>
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
        </div>
        <div>
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
        </div>

        <div className={classes.buttons}>
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
        </div>

        <div className={classes.buttons}>
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
        </div>
      </Flex>
    </>
  );
}
