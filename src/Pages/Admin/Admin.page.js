import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterAdmin from "../../Components/Admin/Auth/Register.admin";
import Login from "../../Components/Admin/Auth/Login.admin";
import ForgotPasswordAdmin from "../../Components/Admin/Auth/ForgotPassword.admin";
import EnterOTPFormAdmin from "../../Components/Admin/Auth/EnterOTPForm.admin";
import ResetNewPasswordAdmin from "../../Components/Admin/Auth/ResetNewPassword.admin";

export default function AdminPage() {
  return (
    <div>
      {/* <h1>Admin</h1> */}
      {/* <Link to={"/admin/register"}>Admin Register</Link> */}
      <Routes>
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
      </Routes>
    </div>
  );
}
