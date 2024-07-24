import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CustomNavbar = ({ login, onLogout }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await onLogout();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SMEs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              {login && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Employee
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/view-employee">
                          View Employee
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/create-employee"
                        >
                          Add Employee
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Vendor
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/view-vendor">
                          View Vendor
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/create-vendor">
                          Add Vendor
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/send-email"
                    >
                      Send Email
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {!login ? (
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    onClick={logout}
                    aria-current="page"
                    to="/"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
