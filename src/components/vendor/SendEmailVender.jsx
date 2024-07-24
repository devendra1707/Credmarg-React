import React, { useState } from "react";
import axios from "axios";
import Base from "../Base";
import { sendEmail } from "../../services/vendorService/vendorService";

const SendEmailVender = () => {
  const [emails, setEmails] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailsChange = (event) => {
    setEmails(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const emailList = emails.split(",").map((email) => email.trim());

    try {
      await sendEmail(emailList);
      setMessage("Emails sent successfully!");
    } catch (error) {
      console.error("Error notifying vendors:", error);
      setMessage("Failed to send emails. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Base>
      <div className="container mt-5">
        <h2>Notify Vendors</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emails">Vendor Emails (comma-separated):</label>
            <textarea
              id="emails"
              className="form-control"
              rows="5"
              value={emails}
              onChange={handleEmailsChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Notifications"}
          </button>
        </form>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </div>
    </Base>
  );
};

export default SendEmailVender;
