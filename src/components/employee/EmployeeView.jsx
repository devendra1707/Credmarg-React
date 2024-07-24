import React, { useEffect, useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import { findEmployee } from "../../services/employeeService/employeeService";
import { cerrentUser } from "../../services/userService/userService";

const EmployeeView = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
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
      findEmployee(user)
        .then((data) => {
          setEmployee(data);
        })
        .catch((error) => {
          console.log("Failed to fetch Employee details:", error);
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
              <th scope="col">Email Id </th>
              <th scope="col">Designation</th>
              <th scope="col">CTC</th>
            </tr>
          </thead>
          <tbody>
            {employee &&
              employee.map((details) => (
                <tr key={details.empId}>
                  <th scope="row">{details.empId}</th>
                  <td>{details.name}</td>
                  <td>{details.email}</td>
                  <td>{details.designation}</td>
                  <td>{details.ctc}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Base>
  );
};

export default EmployeeView;
