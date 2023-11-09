import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AdminPage from "./Pages/Admin/Admin.page";
import VendorPage from "./Pages/Vendor/Vendor.page";
import CustomerPage from "./Pages/Customer/Customer.page";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/customer/*" element={<CustomerPage />}></Route>
            <Route path="/admin/*" element={<AdminPage />}></Route>
            <Route path="/vendor/*" element={<VendorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
