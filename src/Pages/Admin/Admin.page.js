import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterAdmin from "../../Components/Admin/Auth/Register.admin";
import Login from "../../Components/Admin/Auth/Login.admin";
import ForgotPasswordAdmin from "../../Components/Admin/Auth/ForgotPassword.admin";
import EnterOTPFormAdmin from "../../Components/Admin/Auth/EnterOTPForm.admin";
import ResetNewPasswordAdmin from "../../Components/Admin/Auth/ResetNewPassword.admin";
import HomepageAdmin from "../../Components/Admin/Homepage.admin";
import ShopsAdmin from "../../Components/Admin/Shops.admin";
import OrdersAdmin from "../../Components/Admin/Orders.admin";
import DashboardAdmin from "../../Components/Admin/Dashboard.admin";
import ProductsAdmin from "../../Components/Admin/Products.admin";
import ReviewsAdmin from "../../Components/Admin/Reviews.admin";
import AdminLayout from "../../Components/Admin/Dashboard.admin";
import SettingsAdmin from "../../Components/Admin/Settings.admin";

export default function AdminPage() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<AdminLayout Component={HomepageAdmin} />}
        ></Route>
        <Route path="/register" element={<RegisterAdmin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPasswordAdmin />}
        ></Route>
        <Route path="/otp" element={<EnterOTPFormAdmin />}></Route>
        <Route
          path="/reset-new-password"
          element={<ResetNewPasswordAdmin />}
        ></Route>
        <Route
          path="/shops"
          element={<AdminLayout Component={ShopsAdmin} />}
        ></Route>
        <Route
          path="/orders"
          element={<AdminLayout Component={OrdersAdmin} />}
        ></Route>
        <Route
          path="/products"
          element={<AdminLayout Component={ProductsAdmin} />}
        ></Route>
        <Route
          path="/reviews"
          element={<AdminLayout Component={ReviewsAdmin} />}
        ></Route>
        <Route path="/settings" element={<SettingsAdmin />}></Route>
        {/* <Route
          path="/settings"
          element={<AdminLayout Component={SettingsAdmin} />}
        ></Route> */}
      </Routes>
    </div>
  );
}
