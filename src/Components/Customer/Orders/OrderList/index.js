import React, { useState } from "react";

import { Button, Typography } from "antd";

import OrderCard from "./OrderCard";

import classes from "./OrderList.module.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function OrderList({ ordersData, handleOrderId }) {
  const { Title } = Typography;

  return (
    <>
      <div className={classes.orderListBody}>
        <Title level={4} style={{ marginLeft: "10px" }}>
          My Orders
        </Title>
        <OrderCard ordersData={ordersData} handleOrderId={handleOrderId} />
      </div>
    </>
  );
}
