import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPage from "./Pages/Admin/Admin.page";
import VendorPage from "./Pages/Vendor/Vendor.page";
import CustomerPage from "./Pages/Customer/Customer.page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/customer/*" element={<CustomerPage />}></Route>
          <Route path="/admin/*" element={<AdminPage />}></Route>
          <Route path="/vendor/*" element={<VendorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
