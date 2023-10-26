import React from "react";

import classes from "./OrderDetails.module.css";

import { Table } from "antd";

export default function OrderProducts() {
  const columnsTableShops = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      width: 300,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
  ];

  const dataTableShops = [
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
    {
      key: "1",
      item: "Apples",
      quantity: 5,
      price: 2309,
    },
  ];

  return (
    <div>
      <Table
        className={classes.tableShopDetails}
        columns={columnsTableShops}
        dataSource={dataTableShops}
        scroll={{ x: "100%" }}
      />
    </div>
  );
}
