import React, { useEffect, useState } from "react";

import OrderList from "./OrderList";

import OrderDetails from "./OrderDetails";

import classes from "./Orders.module.css";

import { Col, Row, Spin } from "antd";

import axios from "axios";
import EmptyOrderPage from "./EmptyOrderPage";

export default function Orders() {
  const [ordersData, setOrdersData] = useState([]);

  const [orderId, setOrderId] = useState("");

  const [emptyOrders, setEmptyOrders] = useState(true);

  const [loading, setLoading] = useState(false);

  const fetchOrdersData = async () => {
    try {
      setLoading(true);
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzhjNmJmMzMxNzBiZDQ1MDFjYTRjYiIsImVtYWlsIjoiY3VzdG9tZXI1QGdtYWlsLmNvbSIsImlhdCI6MTY5ODM4MDk5Nn0.fjyOPWpzZuygXn8va7jT2qyoj0j_RSKXhBnODCDaPxQ";

      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}/customer/customerOrders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.customerOrders.length !== 0) {
        setEmptyOrders(false);
      }

      setOrdersData(response.data.customerOrders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);
  const handleOrderId = (id) => {
    setOrderId(id);
  };
  console.log(ordersData);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <Spin size="large" />
        </div>
      ) : emptyOrders ? (
        <EmptyOrderPage />
      ) : (
        <>
          <Row>
            <Col span={6}>
              <div className={classes.orderList}>
                <OrderList
                  ordersData={ordersData}
                  handleOrderId={handleOrderId}
                />
              </div>
            </Col>
            <Col span={18}>
              <div className={classes.orderDetails}>
                <OrderDetails ordersData={ordersData} orderId={orderId} />
              </div>
            </Col>
          </Row>
          <div className={classes.orders}></div>
        </>
      )}
    </>
  );
}
