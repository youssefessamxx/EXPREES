import { useState } from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  // Form data state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle error
  const validateForm = () => {
    if (
      !formData.full_name ||
      !formData.email ||
      !formData.phone_number ||
      !formData.password
    ) {
      setError("please full the form");
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email address");
      return false;
    }
    if (formData.password < 6) {
      setError("Password must be at least 6 characters");
    }

    if (formData.password !== confirmPassword) {
      setError("password do not match");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear previous error
    setError("");

    // validate form
    if (!validateForm()) {
      return;
    }

    navigate("/login");

    try {
      const res = await fetch("127.0.0.1:8000/core/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      if (res.ok) {
        console.log("register successfully");
      }
    } catch (err) {
      console.error("Error submitting registration: " + err);
    }
  };

  return (
    <div className={styles.div}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.subForm}>
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
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account ?
            <span>
              {" "}
              <Link className={styles.login} to="/login">
                Log in
              </Link>
            </span>
          </p>
        </div>
        <div className={styles.subForm}>
          <div className={styles.inputImage}>
            <label>Image</label>
            <input type="url" placeholder="Image" />
            {/* <input type="file" className={styles.inputFile} /> */}
            <label className={styles.inputFile}>
              <input type="file" />
              Select the image
            </label>
          </div>
          <div>
            <label>Paswword</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      {error && (
        <p style={{ color: "red", textAlign: "center", fontSize: "2rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Register;
