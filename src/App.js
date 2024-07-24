import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EmployeeCreate from "./components/employee/EmployeeCreate";
import EmployeeView from "./components/employee/EmployeeView";
import VendorCreate from "./components/vendor/VendorCreate";
import VendorList from "./components/vendor/VendorList";
import Login from "./components/user/Login";
import SignUpUser from "./components/user/SignUpUser";
import SendEmailVender from "./components/vendor/SendEmailVender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* Admin */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpUser />} />

        {/* employee */}

        <Route path="/create-employee" element={<EmployeeCreate />} />
        <Route path="/view-employee" element={<EmployeeView />} />

        {/* vendor */}

        <Route path="/create-vendor" element={<VendorCreate />} />
        <Route path="/view-vendor" element={<VendorList />} />
        <Route path="/send-email" element={<SendEmailVender />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
