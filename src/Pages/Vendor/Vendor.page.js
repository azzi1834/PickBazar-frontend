import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import RegisterVendor from "../../Components/Vendor/Register.vendor";

export default function VendorPage() {
  return (
    <div>
      <h1>Vendor</h1>
      <Routes>
        <Route path="/register" element={<RegisterVendor />}></Route>
      </Routes>
    </div>
  );
}
