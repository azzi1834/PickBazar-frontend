import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import RegisterCustomer from "../../Components/Customer/Register.customer";

export default function CustomerPage() {
  return (
    <div>
      <h1>Customer</h1>
      <Routes>
        <Route path="/register" element={<RegisterCustomer />}></Route>
      </Routes>
    </div>
  );
}
