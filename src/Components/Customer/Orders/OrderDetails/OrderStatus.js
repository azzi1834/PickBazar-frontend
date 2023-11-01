import React from "react";

import { Steps } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderStatus({ result }) {
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
  const itemsCancelled = [
    {
      title: "Order Pending",
    },
    {
      title: "Order Processing",
    },
    {
      title: "Order Cancelled",
    },
  ];

  return (
    <div className={classes.orderSteps}>
      <Steps
        current={
          result.OrderStatus === "Completed"
            ? 5
            : result.OrderStatus === "Cancelled"
            ? 3
            : result.OrderStatus === "Out For Delivery"
            ? 3
            : result.OrderStatus === "At Local Facility"
            ? 2
            : 1
        }
        labelPlacement="vertical"
        items={result.OrderStatus === "Cancelled" ? itemsCancelled : items}
        style={{ width: "100%" }}
      />
    </div>
  );
}
