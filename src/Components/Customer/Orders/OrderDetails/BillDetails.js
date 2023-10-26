import React from "react";

import { Typography } from "antd";

import classes from "./OrderDetails.module.css";

export default function BillDetails() {
  const { Title, Text } = Typography;

  return (
    <div className={classes.billDetails}>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <div style={{ marginRight: "auto" }}>
          <Text type="secondary">Sub Total</Text>
        </div>
        <div style={{ marginRight: "10px" }}>Rs.500</div>
      </div>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <div style={{ marginRight: "auto" }}>
          <Text type="secondary">Discount</Text>
        </div>
        <div style={{ marginRight: "10px" }}>Rs.100</div>
      </div>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <div style={{ marginRight: "auto" }}>
          <Text type="secondary">Delivery Fee</Text>
        </div>
        <div style={{ marginRight: "10px" }}>Rs.50</div>
      </div>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <div style={{ marginRight: "auto" }}>
          <Text type="secondary">Tax</Text>
        </div>
        <div style={{ marginRight: "10px" }}>Rs.0.10</div>
      </div>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <div style={{ marginRight: "auto" }}>
          <Text type="primary">
            <strong>Total</strong>
          </Text>
        </div>
        <div style={{ marginRight: "10px" }}>Rs.710</div>
      </div>
    </div>
  );
}
