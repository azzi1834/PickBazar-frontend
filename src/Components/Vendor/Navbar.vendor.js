import React from "react";

import { Menu, Image, Dropdown, Typography } from "antd";

import websiteLogo from "./../../Images/PickBazar.webp";

import classes from "./Style.vendor.module.css";

import { Link } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

export default function VendorNavbar() {
  const { Title } = Typography;
  const items = [
    {
      label: (
        <div style={{ backgroundColor: "rgb(56,148,118)", color: "white" }}>
          <strong>Admin</strong>
          <p>admin@gmail.com</p>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to={"/admin/profile"}>
          <strong>Profile</strong>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to={"/admin/logout"}>
          <strong>Logout</strong>
        </Link>
      ),
      key: "2",
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
                  padding: "10px 60px 2px 10px",
                }
              : null
          }
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Menu
        mode="horizontal"
        theme="light"
        defaultSelectedKeys={["1"]}
        className={classes.navbar}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1,
          // display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <Menu.Item key="0" style={{ display: "flex", justifyContent: "start" }}>
          <Link to={"/admin/dasboard"}>
            <Image src={websiteLogo} alt="PickBazar" width={130} />
          </Link>
        </Menu.Item>
        <Menu.Item
          key="profile"
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          <div
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "1px 18px",
              textDecoration: "none",
            }}
          >
            {" "}
            <Dropdown overlay={menu} trigger={["click"]}>
              <UserOutlined style={{ fontSize: "15px" }} />
            </Dropdown>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
}
