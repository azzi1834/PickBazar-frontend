import React from "react";
import { Menu, Image } from "antd";
import websiteLogo from "./../../Images/PickBazar.webp";
import classes from "./Style.admin.module.css";
import { Link } from "react-router-dom";
export default function NavbarAdmin() {
  return (
    <div>
      <Menu
        mode="horizontal"
        theme="light"
        defaultSelectedKeys={["1"]}
        className={classes.navbar}
        style={{ position: "fixed", width: "100%", zIndex: 1 }}
      >
        <Menu.Item key="0">
          <Link to={"/admin/dasboard"}>
            <Image src={websiteLogo} alt="PickBazar" width={130} />
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item> */}
        {/* <Menu.Item key="4">Contact</Menu.Item> */}
      </Menu>
    </div>
  );
}
