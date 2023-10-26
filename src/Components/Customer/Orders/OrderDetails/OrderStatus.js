import React from "react";

import { Steps } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderStatus() {
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
    <div className={classes.orderSteps}>
      <Steps
        current={1}
        labelPlacement="vertical"
        items={items}
        style={{ width: "100%" }}
      />
    </div>
  );
}
