import React from "react";
import CustomerOrdersList from "./OrdersList.customer";
import CustomerOrderDetails from "./OrderDetails.customer";
import CustomerNavbar from "./Navbar.customer";

export default function MyOrderCustomer() {
  return (
    <>
      <CustomerNavbar />
      <div style={{ display: "flex" }}>
        <CustomerOrdersList />
        <CustomerOrderDetails />
      </div>
    </>
  );
}
