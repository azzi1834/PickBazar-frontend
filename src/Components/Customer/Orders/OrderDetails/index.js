import React from "react";

import { Col, Row, Typography, Divider } from "antd";

import classes from "./OrderDetails.module.css";
import OrderAndPaymentStatus from "./OrderAndPaymentStatus";
import OrderAddressDetails from "./OrderAddressDetails";
import BillDetails from "./BillDetails";
import OrderStatus from "./OrderStatus";
import OrderProducts from "./OrderProducts";

export default function OrderDetails() {
  const { Title } = Typography;
  return (
    <>
      <div className={classes.orderDetails}>
        <Title level={4}>Orders Details - 73487484</Title>

        <OrderAndPaymentStatus />

        {/* order-detail & bill details */}
        <Row>
          <Col span={12}>
            <OrderAddressDetails />
          </Col>
          <Col span={2}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#c7c8c9",
                height: "100%",
              }}
            />
          </Col>
          <Col span={10}>
            <BillDetails />
          </Col>
        </Row>

        <Divider style={{ backgroundColor: "#c7c8c9" }} />

        <OrderStatus />

        <OrderProducts />
      </div>
    </>
  );
}
