import React from "react";

import {
  Menu,
  Image,
  Dropdown,
  Select,
  Button,
  Layout,
  Avatar,
  Row,
  Col,
} from "antd";

import websiteLogo from "./../../Images/PickBazar.webp";

import classes from "./Style.customer.module.css";

import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

export default function CustomerNavbar() {
  const { Option } = Select;

  const { Header } = Layout;

  const items = [
    {
      label: (
        <div style={{ backgroundColor: "rgb(56,148,118)", color: "white" }}>
          <strong>Points</strong>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <Link to={"/customer/profile"}>
          <strong>Profile</strong>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to={"/customer/orders"}>
          <strong>My Orders</strong>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to={"/customer/wishlist"}>
          <strong>My Wishlists</strong>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link to={"/customer/checkout"}>
          <strong>Checkout</strong>
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link to={"/customer/logout"}>
          <strong>Logout</strong>
        </Link>
      ),
      key: "5",
    },
  ];

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item
          key={item.key}
          style={
            item.key === "0"
              ? {
                  backgroundColor: "rgb(56, 148, 118)",
                  padding: "10px 120px 10px 10px",
                }
              : { padding: "10px 120px 10px 10px" }
          }
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  const categoriesItems = ["Bakery", "Grocery", "Makeup"];
  const children = [];
  categoriesItems.map((item, index) => {
    children.push(
      <Option key={index}>
        <Link to={`/customer/${item}`}>{item}</Link>
      </Option>
    );
  });

  return (
    <div>
      <Header
        style={{
          backgroundColor: "transparent",
          height: "auto",
          padding: "0px 15px",
        }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to={"/admin/dasboard"} style={{ marginRight: "40px" }}>
                <Image src={websiteLogo} alt="PickBazar" width={130} />
              </Link>
              <div style={{ width: "200px" }}>
                <Select
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={[]}
                >
                  {children}
                </Select>
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "rgb(56,148,118)",
                  color: "white",
                  margin: "27px 0px",
                }}
              >
                Become a Seller
              </Button>
              <div>
                <div
                  style={{
                    margin: "10px 0px 15px 20px",
                  }}
                >
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <Avatar
                      size={50}
                      icon={<UserOutlined />}
                      style={{ cursor: "pointer" }}
                    />
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
