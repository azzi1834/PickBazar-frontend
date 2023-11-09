import React from "react";

import { useMutation } from "@tanstack/react-query";

import { axiosInstance } from "../AxiosInterceptors";

import { Button, Spin } from "antd";

export default function Mutation() {
  const mutation = useMutation({
    mutationFn: (items) => {
      return axiosInstance.post(
        `${process.env.REACT_APP_TEST_URL}/script/pagination`,
        items
      );
    },
  });
  return (
    <>
      {mutation.isPending ? (
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
      ) : (
        ""
      )}

      {mutation.isSuccess ? "Products created" : ""}

      <Button
        onClick={() => {
          mutation.mutate({ items: 30 });
        }}
      >
        Add Products
      </Button>
    </>
  );
}
