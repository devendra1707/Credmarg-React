import React, { useEffect, useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import { addVendor } from "../../services/vendorService/vendorService";
import { cerrentUser } from "../../services/userService/userService";

const VendorCreate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    upi: "",
    name: "",
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

    addVendor(data, user)
      .then((resp) => {
        alert("User is Registered Successfully");
        setData({
          email: "",
          upi: "",
          name: "",
        });
        navigate("/view-vendor");
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
        <h2 className="text-center">Create Vendor</h2>
        <form>
          <label className="form-label mr-4">
            Full Name <span className="text-danger">*</span>
          </label>
          <div className="mb-3 mt-2">
            <input
              onChange={(e) => handleChange(e, "name")}
              value={data.name}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter here..."
              required
            />
          </div>

          <label className="form-label mr-4">
            Email ID<span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter here..."
              required
            />
          </div>

          <label className="form-label mr-4">
            UPI ID <span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              onChange={(e) => handleChange(e, "upi")}
              value={data.upi}
              type="text"
              className="form-control"
              id="upi"
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

export default VendorCreate;
