import React, { useState } from "react";
import Base from "../Base";
import { doLogin } from "../../auth";
import { loginUser } from "../../services/userService/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event, property) => {
    setLoginDetail({ ...loginDetail, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        doLogin(data, () => {
          console.log("login detail is saved to localstorage");

          navigate("/");
        });

        alert("Login Success");
      })
      .catch((error) => {
        console.log("Failed to Login. Please try again later.");
        console.log(error);
      });
  };

  return (
    <Base>
      <div
        className="container  border mt-5"
        style={{ width: "500px", backgroundColor: "#e2e2e2e2" }}
      >
       
        <h2 className="text-center">Login</h2>
        <form>
          <div className="mb-3 mt-2">
            <label className="form-label mr-4">
              Email ID <span className="text-danger">*</span>
            </label>
            <input
              value={loginDetail.userName}
              onChange={(e) => handleChange(e, "userName")}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label mr-4">
              Password <span className="text-danger">*</span>
            </label>
            <input
              value={loginDetail.password}
              onChange={(e) => handleChange(e, "password")}
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              required
            />
          </div>
          <div className="mb-3 text-center">
            <button className="btn btn-primary" onClick={handleSubmit}>
              SUBMIT
            </button>
            <button className="btn btn-secondary mx-2" type="reset">
              RESET
            </button>
          </div>
        </form>
      </div>
    </Base>
  );
};

export default Login;
