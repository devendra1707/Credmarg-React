import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import { useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../auth";

const Base = ({ children }) => {
  //   return (
  //     <div className="mb-5">
  //       <CustomNavbar />
  //       {children}
  //     </div>
  //   );
  // };

  const [login, setLogin] = useState(isLoggedIn());
  const navigate = useNavigate();

  const handleLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };
  return (
    <div className="wrapper">
      <div className="main">
        <CustomNavbar login={login} onLogout={handleLogout} />
        {children}
      </div>
    </div>
  );
};
export default Base;
