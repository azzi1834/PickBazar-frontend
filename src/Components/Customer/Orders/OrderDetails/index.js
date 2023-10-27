import React, { useEffect, useState } from "react";

import { Col, Row, Typography, Divider } from "antd";

import classes from "./OrderDetails.module.css";
import OrderAndPaymentStatus from "./OrderAndPaymentStatus";
import OrderAddressDetails from "./OrderAddressDetails";
import BillDetails from "./BillDetails";
import OrderStatus from "./OrderStatus";
import OrderProducts from "./OrderProducts";

export default function OrderDetails({ ordersData, orderId }) {
  const [result, setResult] = useState("");

  const { Title } = Typography;
  console.log("default", result);

  useEffect(() => {
    let order = null;
    // if (orderId) {
    order = ordersData.find((option) => option._id === orderId);
    console.log("order", order);
    if (order) {
      setResult(order);
      // }
    }
  }, [orderId, ordersData]);
  return (
    <>
      <div className={classes.orderDetails}>
        <Title level={4}>Orders Details - {orderId}</Title>

        <OrderAndPaymentStatus result={result} />

        {/* order-detail & bill details */}
        <Row>
          <Col span={12}>
            <OrderAddressDetails result={result} />
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
            <BillDetails result={result} />
          </Col>
        </Row>

        <Divider style={{ backgroundColor: "#c7c8c9" }} />

        <OrderStatus result={result} />

        <OrderProducts result={result} />
      </div>
    </>
  );
}
