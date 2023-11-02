import React from "react";

import { Typography, Input, Button, Flex } from "antd";

import CustomerNavbar from "./Navbar.customer";

import GroceryBgImg from "./../../Images/grocery.webp";

import Products from "./Products/index.products";
import Cart from "./Cart/index.cart";

import classes from "./Style.customer.module.css";

export default function CustomerDashboard() {
  const { Title } = Typography;

  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${GroceryBgImg})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <CustomerNavbar />
        <div style={{ textAlign: "center", marginTop: "130px" }}>
          <Title level={1}>Groceries Delivered in 90 minute</Title>
          <p>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>

          <Flex wrap="wrap">
            <Search
              placeholder="Search your products from here"
              allowClear
              enterButton={
                <Button
                  style={{
                    backgroundColor: "rgb(56,148,118)",
                    color: "white",
                  }}
                >
                  Search
                </Button>
              }
              size="large"
              onSearch={onSearch}
              style={{ padding: "20px 350px" }}
            />
          </Flex>
        </div>
      </div>

      <div style={{ marginTop: "auto" }}>
        <Products />
      </div>
      <div className={classes.cartBox}>
        <Cart />
      </div>
    </>
  );
}
