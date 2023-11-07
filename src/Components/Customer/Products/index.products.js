import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button, Card, Row, Col } from "antd";

import AppleImage from "../ProductImages/Apples.webp";
import OrangeImage from "../ProductImages/oranges.webp";

export default function Products() {
  const { Meta } = Card;

  const [productQuantities, setProductQuantities] = useState({});

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzhjNmJmMzMxNzBiZDQ1MDFjYTRjYiIsImVtYWlsIjoiY3VzdG9tZXI1QGdtYWlsLmNvbSIsImlhdCI6MTY5ODM4MDk5Nn0.fjyOPWpzZuygXn8va7jT2qyoj0j_RSKXhBnODCDaPxQ";

      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}/customer/product`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      setProducts(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Products", products);

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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div style={{ margin: "20px" }}>
        <Row gutter={16}>
          {products.map((option, index) => {
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
