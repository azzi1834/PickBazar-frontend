import React from "react";

import { Typography } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderAddressDetails({ result }) {
  const { Title, Text } = Typography;

  const textArr = [
    {
      title: "Shipping Address",
      description: result.ShippingAddress,
    },
    {
      title: "Billing Address",
      description: result.BillingAddress,
    },
  ];

  return (
    <div className={classes.addressDetails}>
      {textArr.map(({ title, description }) => {
        return (
          <>
            <Title level={5}>{title} </Title>
            <Text type="secondary"> {description}</Text>
          </>
        );
      })}
    </div>
  );
}
