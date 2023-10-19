import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import RegisterCustomer from "../../Components/Customer/Auth/Register.customer";
import LoginCustomer from "../../Components/Customer/Auth/Login.customer";
import ForgotPasswordCustomer from "../../Components/Customer/Auth/ForgotPassword.customer";
import EnterOTPFormCustomer from "../../Components/Customer/Auth/EnterOTPForm.customer";
import ResetNewPasswordCustomer from "../../Components/Customer/Auth/ResetNewPassword.customer";
import BakeryCustomer from "../../Components/Customer/Bakery.customer";
import MakeupCustomer from "../../Components/Customer/Makeup.customer";
import FurnitureCustomer from "../../Components/Customer/Furniture.customer";
import GroceryCustomer from "../../Components/Customer/Grocery.customer";
import BagsCustomer from "../../Components/Customer/Bags.customer";
import ClothingsCustomer from "../../Components/Customer/Clothings.customer";
import DailyNeedsCustomer from "../../Components/Customer/DailyNeeds.customer";
import BooksCustomer from "../../Components/Customer/Books.customer";

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
        <Route path="/bakery" element={<BakeryCustomer />}></Route>
        <Route path="/makeup" element={<MakeupCustomer />}></Route>
        <Route path="/furniture" element={<FurnitureCustomer />}></Route>
        <Route path="/grocery" element={<GroceryCustomer />}></Route>
        <Route path="/bags" element={<BagsCustomer />}></Route>
        <Route path="/clothings" element={<ClothingsCustomer />}></Route>
        <Route path="/dailyneeds" element={<DailyNeedsCustomer />}></Route>
        <Route path="/books" element={<BooksCustomer />}></Route>
      </Routes>
    </div>
  );
}
