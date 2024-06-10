import React, { useState } from "react";
import "./LeftComponent.css";

export const LeftComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-End Validation
    if (!email) {
      setMessage("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Invalid email address");
      return;
    }

    // Reset message
    setMessage("");

    // API Request
    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setMessage("Form Submitted");
      } else if (response.status === 422) {
        const errorData = await response.json();
        setMessage(errorData.error || "Invalid email domain");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="left_container">
      <h1>
        <span>EZ</span> Works
      </h1>
      <h2>Suite of Business Support Services</h2>
      <h4>
        Loreum ipsum dolor sit amet, consectuter adipiscing elit, sed do eius
        mod tempor incididunt...Loreum ipsum dolor sit amet, consectuter
        adipiscing elit, sed do eius mod tempor incididunt
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Contact Me</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
