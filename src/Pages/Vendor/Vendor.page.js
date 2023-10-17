import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import RegisterVendor from "../../Components/Vendor/Auth/Register.vendor";
import LoginVendor from "../../Components/Vendor/Auth/Login.vendor";
import ForgotPasswordVendor from "../../Components/Vendor/Auth/ForgotPassword.vendor";
import EnterOTPFormVendor from "../../Components/Vendor/Auth/EnterOTPForm.vendor";
import ResetNewPasswordVendor from "../../Components/Vendor/Auth/ResetNewPassword.vendor";

export default function VendorPage() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterVendor />}></Route>
        <Route path="/login" element={<LoginVendor />}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPasswordVendor />}
        ></Route>
        <Route path="/otp" element={<EnterOTPFormVendor />}></Route>
        <Route
          path="/reset-new-password"
          element={<ResetNewPasswordVendor />}
        ></Route>
      </Routes>
    </div>
  );
}
