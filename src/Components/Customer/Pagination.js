import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";

import axios from "axios";

export default function Pagination() {
  const [newdata, setData] = useState([]);

  const fetchData = async (page, pageSize) => {
    console.log("page", page);

    console.log("pageSize", pageSize);

    const [currentPage, setCurrentPage] = useState(1);

    const [pageSize, setPageSize] = useState(10);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}/script/pagination?page=${page}&size=${pageSize}`
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newdata);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
  ];
  const data = newdata.map((item, index) => ({
    name: item.name,
    price: item.price,
    color: item.color,
    size: item.size,
  }));

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            fetchData(page, pageSize);
            setCurrentPage(page);
            setPageSize(pageSize);
          },
        }}
      />
    </>
  );
}
