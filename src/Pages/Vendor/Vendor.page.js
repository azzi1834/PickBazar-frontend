import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import RegisterVendor from "../../Components/Vendor/Auth/Register.vendor";
import LoginVendor from "../../Components/Vendor/Auth/Login.vendor";
import ForgotPasswordVendor from "../../Components/Vendor/Auth/ForgotPassword.vendor";
import EnterOTPFormVendor from "../../Components/Vendor/Auth/EnterOTPForm.vendor";
import ResetNewPasswordVendor from "../../Components/Vendor/Auth/ResetNewPassword.vendor";
import VendorLayout from "../../Components/Vendor/Dashboard.vendor";
import VendorShops from "../../Components/Vendor/Shops.vendor";
import VenderOrders from "../../Components/Vendor/Orders.vendor";
import VendorProducts from "../../Components/Vendor/Products.vendor";
import VendorReviews from "../../Components/Vendor/Reviews.vendor";
import VendorHomepage from "../../Components/Vendor/Homepage.vendor";

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
        <Route
          path="/dashboard"
          element={<VendorLayout Component={VendorHomepage} />}
        ></Route>
        <Route
          path="/shops"
          element={<VendorLayout Component={VendorShops} />}
        ></Route>
        <Route
          path="/orders"
          element={<VendorLayout Component={VenderOrders} />}
        ></Route>
        <Route
          path="/products"
          element={<VendorLayout Component={VendorProducts} />}
        ></Route>
        <Route
          path="/reviews"
          element={<VendorLayout Component={VendorReviews} />}
        ></Route>
      </Routes>
    </div>
  );
}
