import React, { useEffect, useState } from "react";

import OrderList from "./OrderList";

import OrderDetails from "./OrderDetails";

import classes from "./Orders.module.css";

import { Col, Row, Spin } from "antd";

import EmptyOrderPage from "./EmptyOrderPage";

import { axiosInstance } from "../../AxiosInterceptors";

import { useQuery } from "@tanstack/react-query";

export default function Orders() {
  const [orderId, setOrderId] = useState("");

  const [emptyOrders, setEmptyOrders] = useState(true);

  const fetchOrdersData = async () => {
    try {
      const response = await axiosInstance.get(`/customer/customerOrders`);

      if (response.data.customerOrders.length !== 0) {
        setEmptyOrders(false);
      }

      return response.data.customerOrders;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrdersDataObj = {
    queryKey: ["Orders"],
    queryFn: fetchOrdersData,
  };

  const fetchedOrders = useQuery(fetchOrdersDataObj);

  const handleOrderId = (id) => {
    setOrderId(id);
  };

  return (
    <>
      {fetchedOrders.isFetching ? (
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
                  ordersData={fetchedOrders.data}
                  handleOrderId={handleOrderId}
                />
              </div>
            </Col>
            <Col span={18}>
              <div className={classes.orderDetails}>
                <OrderDetails
                  ordersData={fetchedOrders.data}
                  orderId={orderId}
                />
              </div>
            </Col>
          </Row>
          <div className={classes.orders}></div>
        </>
      )}
    </>
  );
}
