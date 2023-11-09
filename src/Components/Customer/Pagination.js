import React, { useEffect, useState } from "react";

import { Table } from "antd";

import { axiosInstance } from "../AxiosInterceptors";

import { useQuery } from "@tanstack/react-query";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const [pageSize, setPageSize] = useState(2);

  const fetchData = async (page, pageSize) => {
    try {
      const response = await axiosInstance.get(
        `/script/pagination/items?page=${page}&size=${pageSize}`
      );

      if (!response.status === 200) {
        console.log("some thing error");
      }

      console.log("items response", response.data.data);

      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuantity();
    fetchData(currentPage, pageSize);
  }, []);

  const fetchQuantity = async () => {
    try {
      const response = await axiosInstance.get(`/script/itemsQuantity`);

      if (!response === 200) {
        console.log("error");
      }

      return response.data.quantity;
    } catch (error) {
      console.log(error);
    }
  };

  let fetchQuantityObj = {
    queryKey: ["Quantity"],
    queryFn: fetchQuantity,
  };

  let fetchItemsObj = {
    queryKey: ["fetchItems"],
    queryFn: fetchData,
  };

  const fetchedQuantity = useQuery(fetchQuantityObj);

  const fetchedItems = useQuery(fetchItemsObj);

  if (fetchedQuantity.isLoading) return "loading...";

  if (fetchedQuantity.isError)
    return "an error occurred" + fetchedQuantity.error.message;

  console.log("quantity", fetchedQuantity.data);

  if (fetchedItems.isError)
    return "an error occurred" + fetchedItems.error.message;

  console.log("items", fetchedItems.data);

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

  const tableData = fetchedItems.data.map((item, index) => ({
    name: item.name,

    price: item.price,

    color: item.color,

    size: item.size,
  }));

  const handlePageChange = (page) => {
    setCurrentPage(page.current);

    fetchData(page.current - 1, pageSize);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{
          total: fetchedQuantity.data,
          pageSize: pageSize,
          current: currentPage === 0 ? currentPage + 1 : currentPage,
        }}
        onChange={(pagination) => {
          console.log("PAGINATION: ", pagination);
          handlePageChange(pagination);
        }}
      />
    </>
  );
}
