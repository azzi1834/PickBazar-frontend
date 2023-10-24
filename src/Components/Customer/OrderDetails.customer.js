import React from "react";

import { Typography, Card, Row, Col } from "antd";

export default function CustomerOrderDetails() {
  const { Title } = Typography;

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid black",
          padding: "10px",
          paddingLeft: "40px",
          margin: "20px",
        }}
      >
        <Title level={4}>Orders Details - 3248324324</Title>
        <Row>
          <Col span={12}>Order Status:</Col>
          <Col span={12}></Col>
        </Row>
      </div>
    </>
  );
}
