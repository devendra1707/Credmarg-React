import React, { useEffect, useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../services/employeeService/employeeService";
import { cerrentUser } from "../../services/userService/userService";

const EmployeeCreate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    ctc: "",
    name: "",
    designation: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    cerrentUser()
      .then((data) => {
        setUser(data.id);
      })
      .catch((error) => {
        console.log("Failed to fetch current user:", error);
      });
  }, []);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted ...");

    addEmployee(data, user)
      .then((resp) => {
        alert("Employee Created Successfully");
        setData({
          email: "",
          ctc: "",
          name: "",
          designation: "",
        });
        navigate("/view-employee");
      })
      .catch((error) => {
        console.log("Failed to Create Employee. Please try again later.");
      });
  };

  return (
    <Base>
      <div
        className="container border mt-5"
        style={{ width: "500px", backgroundColor: "#e2e2e2e2" }}
      >
        <h2 className="text-center">Create Employee</h2>
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
          <div className="mb-3">
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
              Designation <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e, "designation")}
              value={data.designation}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter here... "
            />
          </div>
          <div className="mb-3">
            <label className="form-label mr-4">
              CTC <span className="text-danger">*</span>
            </label>
            <input
              onChange={(e) => handleChange(e, "ctc")}
              value={data.ctd}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter here..."
              required
            />
          </div>

          <div className="mb-3">
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

export default EmployeeCreate;
