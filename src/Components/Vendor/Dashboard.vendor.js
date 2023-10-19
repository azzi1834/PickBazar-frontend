import React from "react";

import { Link } from "react-router-dom";

import classes from "./Style.vendor.module.css";

import NavbarAdmin from "./Navbar.vendor";

import ProductsIcon from "./Icons/Products.svg";
import SettingsIcon from "./Icons/Settings.svg";
import OrdersIcon from "./Icons/Orders.svg";
import ReviewsIcon from "./Icons/Reviews.svg";
import DashbaordIcon from "./Icons/Dashboard.svg";
import ShopsIcon from "./Icons/Shops.svg";

import { Layout, Menu, Image, Card, theme } from "antd";

export default function VendorLayout({ Component }) {
  const { Header, Content, Sider, Footer } = Layout;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
            top: 0,
            bottom: 0,
            marginTop: "80px",
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="light" mode="inline" style={{ height: "100%" }}>
            <Menu.Item>
              <Link to={"/vendor/dashboard"}>
                <Image src={DashbaordIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/vendor/shops"}>
                <Image src={ShopsIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Shops</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/vendor/products"}>
                <Image src={ProductsIcon} alt="" width={20} />
                <span className={classes.Siderbaricon}>Products</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/vendor/reviews"}>
                <Image src={ReviewsIcon} alt="ReviewsIcon" width={20} />
                <span className={classes.Siderbaricon}>Reviews</span>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/vendor/orders"}>
                <Image src={OrdersIcon} alt="OrdersIcon" width={20} />
                <span className={classes.Siderbaricon}>Orders</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        {/* dynamic content */}
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <Component />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
