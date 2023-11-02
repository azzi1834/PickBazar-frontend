import React, { useState } from "react";

import { Flex, Image, Drawer, Typography, Divider } from "antd";

import classes from "./Style.cart.module.css";

import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import CartBagIcon from "./CartImages/CartBag";
import CartBagIconFilled from "./CartImages/CartBagFilled";
import EmptyCartImage from "./CartImages/EmptyCart";
import Apples from "../ProductImages/Apples.webp";
export default function CheckoutDrawer() {
  const [open, setOpen] = useState(false);

  const { Text, Title } = Typography;

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const customCloseIconStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
  };

  const footerContent = (
    <div style={{ padding: "10px", cursor: "pointer" }}>
      <Flex
        justify="space-between"
        align="center"
        className={classes.checkoutBox}
      >
        <Text style={{ color: "white", fontSize: "17px" }}>Checkout</Text>
        <span className={classes.checkoutPrice}>{"Rs." + 0.0}</span>
      </Flex>
    </div>
  );

  return (
    <>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "flex-end",
      //   alignItems: "center",
      //   height: "100vh",
      //   position: "fixed",
      //   right: 0,
      //   top: 0,
      //   zIndex: 1,
      // }}
      >
        <Flex
          justify="center"
          align="center"
          className={classes.cartBox}
          vertical
          onClick={showDrawer}
        >
          <div>
            <span style={{ marginRight: "7px" }}>
              <CartBagIcon />
            </span>
            {0} Item
          </div>
          <div className={classes.price}>
            <Flex justify="center" align="center">
              Rs.0.00
            </Flex>
          </div>
        </Flex>
      </div>
      <Drawer
        title={
          <span style={{ color: "rgb(56,148,118)" }}>
            <CartBagIconFilled />
            <span style={{ marginLeft: "7px" }}>{0} Items</span>
          </span>
        }
        placement="right"
        onClose={onClose}
        open={open}
        closeIcon={<CloseOutlined style={customCloseIconStyle} />}
        width={400}
        footer={footerContent}
      >
        {/* if cart is empty */}
        {/* <Flex justify="space-between" vertical>
          <div>
            <Flex justify="center" align="center" vertical>
              <div style={{ marginTop: "70px" }}>
                <EmptyCartImage />
              </div>
              <Title level={5}>No Products Found</Title>
            </Flex>
          </div>
          <div>
            <Flex
              justify="space-between"
              align="center"
              className={classes.checkoutBox}
            >
              <Text style={{ color: "white", fontSize: "17px" }}>Checkout</Text>
              <span className={classes.checkoutPrice}>{"Rs." + 0.0}</span>
            </Flex>
          </div>
        </Flex> */}
        {/* if cart has items */}

        <div className={classes.drawerBody}>
          <Flex align="flex-start">
            <div>
              <Flex
                justify="space-around"
                align="center"
                vertical
                className={classes.changeQuantity}
              >
                <Text style={{ marginBottom: "10px", cursor: "pointer" }}>
                  <PlusOutlined />
                </Text>
                <span>{1}</span>
                <Text style={{ marginTop: "8px", cursor: "pointer" }}>
                  <MinusOutlined />
                </Text>
              </Flex>
            </div>
            <div style={{ padding: "20px" }}>
              <Image src={Apples} width={60} />
            </div>
            <Flex justify="flex-start" vertical style={{ marginRight: "20px" }}>
              <Text style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Baby Spinach
              </Text>
              <Text style={{ marginBottom: "10px" }}>Rs. 60</Text>
              <Text type="secondary">
                <span>{1}</span>
                <CloseOutlined />1 kg
              </Text>
            </Flex>
            <Flex
              justify="center"
              align="center"
              style={{ padding: "40px 5px", fontWeight: "bold" }}
            >
              <Text>Rs.{60}</Text>
            </Flex>
            <div
              style={{
                marginTop: "40px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
            >
              <CloseOutlined />
            </div>
          </Flex>
          <Divider />
          <Flex align="flex-start">
            <div>
              <Flex
                justify="space-around"
                align="center"
                vertical
                className={classes.changeQuantity}
              >
                <Text style={{ marginBottom: "10px", cursor: "pointer" }}>
                  <PlusOutlined />
                </Text>
                <span>{1}</span>
                <Text style={{ marginTop: "8px", cursor: "pointer" }}>
                  <MinusOutlined />
                </Text>
              </Flex>
            </div>
            <div style={{ padding: "20px" }}>
              <Image src={Apples} width={60} />
            </div>
            <Flex justify="flex-start" vertical style={{ marginRight: "20px" }}>
              <Text style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Baby Spinach
              </Text>
              <Text style={{ marginBottom: "10px" }}>Rs. 60</Text>
              <Text type="secondary">
                <span>{1}</span>
                <CloseOutlined />1 kg
              </Text>
            </Flex>
            <Flex
              justify="center"
              align="center"
              style={{ padding: "40px 5px", fontWeight: "bold" }}
            >
              <Text>Rs.{60}</Text>
            </Flex>
            <div
              style={{
                marginTop: "40px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
            >
              <CloseOutlined />
            </div>
          </Flex>
          <Divider />
          <Flex align="flex-start">
            <div>
              <Flex
                justify="space-around"
                align="center"
                vertical
                className={classes.changeQuantity}
              >
                <Text style={{ marginBottom: "10px", cursor: "pointer" }}>
                  <PlusOutlined />
                </Text>
                <span>{1}</span>
                <Text style={{ marginTop: "8px", cursor: "pointer" }}>
                  <MinusOutlined />
                </Text>
              </Flex>
            </div>
            <div style={{ padding: "20px" }}>
              <Image src={Apples} width={60} />
            </div>
            <Flex justify="flex-start" vertical style={{ marginRight: "20px" }}>
              <Text style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Baby Spinach
              </Text>
              <Text style={{ marginBottom: "10px" }}>Rs. 60</Text>
              <Text type="secondary">
                <span>{1}</span>
                <CloseOutlined />1 kg
              </Text>
            </Flex>
            <Flex
              justify="center"
              align="center"
              style={{ padding: "40px 5px", fontWeight: "bold" }}
            >
              <Text>Rs.{60}</Text>
            </Flex>
            <div
              style={{
                marginTop: "40px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
            >
              <CloseOutlined />
            </div>
          </Flex>
          <Divider />
        </div>
      </Drawer>
    </>
  );
}
