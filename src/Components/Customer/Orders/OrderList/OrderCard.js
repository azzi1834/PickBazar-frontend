import React from "react";

import OrderCardData from "./OrderCardData";

export default function OrderCard({ ordersData, handleOrderId }) {
  return (
    <>
      <OrderCardData ordersData={ordersData} handleOrderId={handleOrderId} />
    </>
  );
}
