import React from "react";

import OrderList from "./OrderList";

import OrderDetails from "./OrderDetails";

import classes from "./Orders.module.css";
import { Col, Row } from "antd";

export default function Orders() {
  return (
    <>
      <Row>
        <Col span={6}>
          <div className={classes.orderList}>
            <OrderList />
          </div>
        </Col>
        <Col span={18}>
          <div className={classes.orderDetails}>
            <OrderDetails />
          </div>
        </Col>
      </Row>
      <div className={classes.orders}></div>
    </>
  );
}
