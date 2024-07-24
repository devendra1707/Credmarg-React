
import React, { useEffect, useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import { findVendor } from "../../services/vendorService/vendorService";
import { cerrentUser } from "../../services/userService/userService";

const VendorList = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState([]);
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

  useEffect(() => {
    if (user !== null) {
      findVendor(user)
        .then((data) => {
          setVendor(data);
        })
        .catch((error) => {
          console.log("Failed to fetch vendor details:", error);
        });
    }
  }, [user]);

  return (
    <Base>
      <div className="container mt-2 mb-5 p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">UPI ID</th>
            </tr>
          </thead>
          <tbody>
            {vendor.length > 0 ? (
              vendor.map((details) => (
                <tr key={details.vendorId}>
                  <th scope="row">{details.vendorId}</th>
                  <td>{details.name}</td>
                  <td>{details.email}</td>
                  <td>{details.upi}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No vendors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Base>
  );
};

export default VendorList;
