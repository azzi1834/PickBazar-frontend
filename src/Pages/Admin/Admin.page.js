import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterAdmin from "../../Components/Admin/Register.admin";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      {/* <Link to={"/admin/register"}>Admin Register</Link> */}
      <Routes>
        <Route path="/register" element={<RegisterAdmin />}></Route>
      </Routes>
    </div>
  );
}
