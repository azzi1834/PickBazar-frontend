import React from "react";

import { Link } from "react-router-dom";

import classes from "./Style.admin.module.css";

import NavbarAdmin from "./Navbar.admin";

import ProductsIcon from "./Icons/Products.admin.svg";
import SettingsIcon from "./Icons/Settings.admin.svg";
import OrdersIcon from "./Icons/Orders.admin.svg";
import ReviewsIcon from "./Icons/Reviews.admin.svg";
import DashbaordIcon from "./Icons/Dashboard.admin.svg";
import ShopsIcon from "./Icons/Shops.admin.svg";

import { Layout, Menu, Image, Card } from "antd";

export default function DashboardAdmin() {
  const { Header, Content, Sider } = Layout;

  return (
    <>
      <NavbarAdmin />

      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 80,
            bottom: 0,
            right: 0,
            width: "300px",
            maxWidth: "300px",
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="light" mode="inline" style={{ height: "100%" }}>
            <Menu.Item>
              <Link to={"/admin/dashboard"}>
                <Image src={DashbaordIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/shops"}>
                <Image src={ShopsIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Shops</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/products"}>
                <Image src={ProductsIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Products</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/reviews"}>
                <Image src={ReviewsIcon} alt="ReviewsIcon" width={20} />
                <span className={classes.Siderbaricon}>Reviews</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/orders"}>
                <Image src={OrdersIcon} alt="OrdersIcon" width={20} />
                <span className={classes.Siderbaricon}>Orders</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/admin/settings"}>
                <Image src={SettingsIcon} alt="SettingsIcon" width={20} />
                <span className={classes.Siderbaricon}>Settings</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </>
  );
}
