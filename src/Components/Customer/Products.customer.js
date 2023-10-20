import React, { useState } from "react";

import { Button, Card, Row, Col } from "antd";

import AppleImage from "./ProductImages/Apples.webp";
import OrangeImage from "./ProductImages/oranges.webp";

export default function CustomerProducts() {
  const { Meta } = Card;

  const [quantity, setQuantity] = useState(0);

  const [showAdd, setShowAdd] = useState(true);

  // if (quantity === 1 || quantity >= 1) {
  //   setShowAdd(false);
  // }
  const productItems = [
    {
      image: AppleImage,
      name: "Apples",
      unitPrice: "100",
      salePrice: "89",
    },
    {
      image: OrangeImage,
      name: "Oranges",
      unitPrice: "50",
      salePrice: "40",
    },
    {
      image: OrangeImage,
      name: "Oranges",
      unitPrice: "50",
      salePrice: "40",
    },
    {
      image: OrangeImage,
      name: "Oranges",
      unitPrice: "50",
      salePrice: "40",
    },
    {
      image: OrangeImage,
      name: "Oranges",
      unitPrice: "50",
      salePrice: "40",
    },
    {
      image: OrangeImage,
      name: "Oranges",
      unitPrice: "50",
      salePrice: "40",
    },
  ];

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <Row gutter={16}>
          {productItems.map((option, index) => {
            return (
              <Col span={6} key={index}>
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 290,
                    marginBottom: "20px",
                  }}
                  cover={<img alt="apple" src={option.image} />}
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
                          <del>Rs.{option.unitPrice}</del>
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
                      // backgroundColor: "rgb(56,148,118)",
                    }}
                  >
                    <Button
                      key={index}
                      onClick={handleDecrease}
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
                      {quantity}
                    </span>
                    <Button
                      onClick={handleIncrease}
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
