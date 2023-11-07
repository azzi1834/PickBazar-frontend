import React from "react";

import { Button, Flex, Empty } from "antd";
import CustomerNavbar from "../Navbar.customer";
import { Link } from "react-router-dom";

const boxStyle = {
  width: "90%",
  height: "auto",
  borderRadius: 6,
  border: "2px solid rgb(56,148,118)",
  margin: "1em auto",
  marginTop: "100px",
};
export default function EmptyOrderPage() {
  return (
    <>
      <CustomerNavbar />
      <Flex
        style={boxStyle}
        gap="middle"
        align="center"
        justify="center"
        vertical
      >
        <Empty style={{ marginTop: "30px" }} />
        <Button
          style={{
            backgroundColor: "rgb(56,148,188)",
            color: "white",
            margin: "50px 0px",
          }}
        >
          <Link to={"/customer/bakery"}>Place Order Now</Link>
        </Button>
      </Flex>
    </>
  );
}
