import React from "react";

import { Typography } from "antd";

import OrderCard from "./OrderCard";

import classes from "./OrderList.module.css";

export default function OrderList() {
  const { Title } = Typography;

  return (
    <>
      <div className={classes.orderListBody}>
        <Title level={4} style={{ marginLeft: "10px" }}>
          My Orders
        </Title>
        <OrderCard />
      </div>
    </>
  );
}
