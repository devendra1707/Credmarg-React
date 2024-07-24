import React, { useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/userService/userService";

const SignUpUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    signUpUser(data)
      .then((resp) => {
        alert("User is Registered Successfully");
        setData({
          email: "",
          password: "",
          name: "",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log("Failed to Register User. Please try again later.");
      });
  };


  return (
    <Base>
      <div
        className="container border mt-5"
        style={{ width: "500px", backgroundColor: "#e2e2e2e2" }}
      >
       
        <h2 className="text-center">Register User</h2>
        <form>
          <div className="mb-3 mt-2">
            <label className="form-label mr-4">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e, "name")}
              value={data.name}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              required
            />
          </div>
          <div className="mb-3 mt-2">
            <label className="form-label mr-4">
              Email ID <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
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
              onChange={(e) => handleChange(e, "password")}
              value={data.password}
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

export default SignUpUser;
