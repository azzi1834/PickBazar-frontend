import React from "react";

import { Col, Row, Typography, Button, Flex } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderAndPaymentStatus({ result }) {
  const { Title, Text } = Typography;

  return (
    <>
      <Flex justify="space-around" align="center" wrap="wrap">
        <div>
          <Title level={4}>Order Status:</Title>
          <Text
            className={
              result.OrderStatus === "Completed"
                ? classes.orderStatusCompleted
                : result.OrderStatus === "Cancelled"
                ? classes.orderStatusCancelled
                : classes.orderStatusPending
            }
            style={{
              fontSize: "18px",
              borderRadius: "20px",
            }}
          >
            Order {result.OrderStatus}
          </Text>
        </div>
        <div>
          <Title level={4}>Payment Status:</Title>
          <Text
            className={
              result.OrderStatus === "Completed"
                ? classes.orderStatusCompleted
                : result.OrderStatus === "Cancelled"
                ? classes.orderStatusCancelled
                : classes.orderStatusPending
            }
            style={{
              fontSize: "18px",
              borderRadius: "20px",
            }}
          >
            Payment {result.PaymentStatus}
          </Text>
        </div>
        {result.OrderStatus === "Cancelled" ||
        result.OrderStatus === "Completed" ? (
          ""
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </>
  );
}
