import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import RegisterCustomer from "../../Components/Customer/Auth/Register.customer";
import LoginCustomer from "../../Components/Customer/Auth/Login.customer";
import ForgotPasswordCustomer from "../../Components/Customer/Auth/ForgotPassword.customer";
import EnterOTPFormCustomer from "../../Components/Customer/Auth/EnterOTPForm.customer";
import ResetNewPasswordCustomer from "../../Components/Customer/Auth/ResetNewPassword.customer";
import CustomerLandingPage from "../../Components/Customer/LandingPage.customer";
import CustomerProducts from "../../Components/Customer/Products.customer";

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
        <Route path="/bakery" element={<CustomerLandingPage />}></Route>
        <Route path="/products" element={<CustomerProducts />}></Route>
      </Routes>
    </div>
  );
}
