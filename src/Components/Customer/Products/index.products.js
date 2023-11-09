import React, { useState } from "react";

import { Button, Card, Row, Col } from "antd";

import { useQuery } from "@tanstack/react-query";

import OrangeImage from "../ProductImages/oranges.webp";

import { axiosInstance } from "../../AxiosInterceptors";

export default function Products() {
  const { Meta } = Card;

  const [productQuantities, setProductQuantities] = useState({});

  const handleDecrease = (id) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      if (updatedQuantities[id] && updatedQuantities[id] > 0) {
        updatedQuantities[id] -= 1;
      }
      console.log(updatedQuantities);
      return updatedQuantities;
    });
  };

  const handleIncrease = (id) => {
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
      console.log(updatedQuantities);
      return updatedQuantities;
    });
  };

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`/customer/product`);
      if (!response.status === 200) {
        console.log("some thing error");
      }
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log("products fetching error", error);
    }
  };

  let queryObj = {
    queryKey: ["products"],
    queryFn: fetchProducts,
  };

  const { isLoading, isError, data, error } = useQuery(queryObj);

  if (isLoading) return "loading...";

  if (isError) return "an error occurred" + error.message;

  console.log("query data", data);

  return (
    <>
      <div style={{ margin: "20px" }}>
        <Row gutter={16}>
          {data.map((option, index) => {
            return (
              <Col span={6} key={index}>
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 290,
                    marginBottom: "20px",
                  }}
                  cover={<img alt="apple" src={OrangeImage} />}
                >
                  <Meta
                    title={
                      <div>
                        Rs.{option.salePrice}
                        <span
                          style={{
                            marginLeft: "5px",
                            fontWeight: "lighter",
                            fontSize: "15px",
                            color: "#5c5a5a",
                          }}
                        >
                          <del>Rs.{option.price}</del>
                        </span>
                      </div>
                    }
                    description={option.name}
                  />
                  <div
                    key={index}
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      key={index}
                      onClick={() => handleDecrease(option._id)}
                      style={{
                        backgroundColor: "rgb(56,148,118)",
                        color: "white",
                      }}
                    >
                      -
                    </Button>
                    <span
                      style={{
                        backgroundColor: "rgb(56,148,118)",
                        color: "white",
                        padding: "4px 65px",
                      }}
                    >
                      {productQuantities[option._id] || 0}
                    </span>
                    <Button
                      onClick={() => handleIncrease(option._id)}
                      style={{
                        backgroundColor: "rgb(56,148,118)",
                        color: "white",
                      }}
                    >
                      +
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
