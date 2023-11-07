import React, { useEffect, useState } from "react";

import { Space, Table, Tag, Pagination } from "antd";

import axios from "axios";

export default function PaginationPage() {
  const [newdata, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [pageSize, setPageSize] = useState(2);

  const [quantity, setQuantity] = useState(null);

  const totalPages = Math.ceil(quantity / pageSize);

  const [pagination, setPagination] = useState({
    current: 1, // Current page
    pageSize: pageSize, // Number of items per page
  });

  const fetchData = async (page, pageSize) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}/script/pagination?page=${page}&size=${pageSize}`
      );

      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuantity = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}/script/itemsQuantity`
      );

      console.log("quantity", response?.data?.quantity);

      setQuantity(response?.data?.quantity);
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

  const handlePageChange = (page) => {
    setCurrentPage(page.current);

    fetchData(page.current - 1, pageSize);
  };
  useEffect(() => {
    fetchQuantity();
    fetchData(currentPage, pageSize);
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: quantity,
          pageSize: pageSize,
          current: currentPage === 0 ? currentPage + 1 : currentPage,
        }}
        onChange={(pagination) => {
          console.log("PAGINATION: ", pagination);
          handlePageChange(pagination);
        }}
      />

      {/* <Pagination
        defaultCurrent={1}
        total={quantity}
        pageSize={pageSize}
        current={currentPage === 0 ? currentPage + 1 : currentPage}
        onChange={handlePageChange}
      /> */}
    </>
  );
}
