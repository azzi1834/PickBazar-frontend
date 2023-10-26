import React from "react";

import { Typography } from "antd";

import classes from "./OrderDetails.module.css";

export default function OrderAddressDetails() {
  const { Title, Text } = Typography;

  const textArr = [
    {
      title: "Shipping Address",
      description: "mermoz, Dakar, Dakar, 38169, Sénégal",
    },
    {
      title: "Billing Address",
      description:
        " Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus sint, 51397, Aut fugiat iusto do",
    },
    {
      title: "Billing Address",
      description:
        " Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus sint, 51397, Aut fugiat iusto do",
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
