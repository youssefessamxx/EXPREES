import styles from "./Login.module.css";
import loginImg from "../assets/login-s.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/Auth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  // data from form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      login();
    }

    navigate("/");

    try {
      const res = await fetch("127.0.0.1:8000/core/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();

      if (res.ok) {
        console.log("login successfully");
      }
    } catch (err) {
      console.error("Error submitting login: " + err);
    }
  };

  return (
    <div className={styles.div}>
      <h2>Log in</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p>Forget Password</p>
          <button type="submit">Log in</button>
          <p>
            Dont have account ?{" "}
            <Link to="/register" className={styles.register}>
              Register
            </Link>
          </p>
        </form>

        <img src={loginImg} alt="" />
      </div>
    </div>
  );
}

export default Login;
