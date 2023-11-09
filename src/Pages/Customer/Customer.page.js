import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import RegisterCustomer from "../../Components/Customer/Auth/Register.customer";
import LoginCustomer from "../../Components/Customer/Auth/Login.customer";
import ForgotPasswordCustomer from "../../Components/Customer/Auth/ForgotPassword.customer";
import EnterOTPFormCustomer from "../../Components/Customer/Auth/EnterOTPForm.customer";
import ResetNewPasswordCustomer from "../../Components/Customer/Auth/ResetNewPassword.customer";
import Orders from "../../Components/Customer/Orders";
import CustomerDashboard from "../../Components/Customer/Dashboard.customer";
import Products from "../../Components/Customer/Products/index.products";
import Cart from "../../Components/Customer/Cart/index.cart";
import Pagination from "../../Components/Customer/Pagination";
import Mutation from "../../Components/Customer/Mutation";

export default function CustomerPage() {
  return (
    <div>
      <ui />

      <Routes>
        <Route path="/register" element={<RegisterCustomer />}></Route>

        <Route path="/login" element={<LoginCustomer />}></Route>

        <Route
          path="/forgot-password"
          element={<ForgotPasswordCustomer />}
        ></Route>

        <Route path="/otp" element={<EnterOTPFormCustomer />}></Route>

        <Route
          path="/reset-new-password"
          element={<ResetNewPasswordCustomer />}
        ></Route>

        <Route path="/bakery" element={<CustomerDashboard />}></Route>

        <Route path="/products" element={<Products />}></Route>

        <Route path="/orders" element={<Orders />}></Route>

        {/* testing routes  */}
        <Route path="/ordercard" element={<Mutation />}></Route>
      </Routes>
    </div>
  );
}
