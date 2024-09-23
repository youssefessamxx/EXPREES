import styels from "./Contact.module.css";

import contact from "../assets/contact.png";
import { useState } from "react";

function Contact() {
  // data from form
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    msg: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      !formData.full_name ||
      !formData.phone_number ||
      !formData.email ||
      !formData.msg
    ) {
      setError("Invalid contact request");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    if (!validateForm()) {
      return;
    }

    // clean
    setFormData({
      full_name: "",
      phone_number: "",
      email: "",
      msg: "",
    });

    try {
      const res = await fetch("127.0.0.1:8000/core/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      if (res.ok) {
        console.log("contact message received");
      }
    } catch (err) {
      console.error("Error contact message: " + err);
    }
  };
  return (
    <div className={styels.div} id="Contact">
      <h2>Contact Us</h2>
      <div className={styels.container}>
        <form className={styels.form} onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              placeholder="Message"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send</button>
          {error && (
            <p
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "600",
              }}
            >
              {error}
            </p>
          )}
        </form>

        <img src={contact} alt="" />
      </div>
    </div>
  );
}

export default Contact;
