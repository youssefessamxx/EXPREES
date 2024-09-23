import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import styles from "./AppNav.module.css";
import { useAuth } from "../context/Auth";

function AppNav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={styles.div}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About US</a>
          </li>
          <li>
            <a href="/#Services">Services</a>
          </li>
          <li>
            <a href="/#Track">Track</a>
          </li>
          <li>
            <a href="/#Check">Check Freight</a>
          </li>
          <li>
            <a href="/#Contact">Contact us</a>
          </li>
        </ul>
      </nav>
      <div className={styles.ctaNav}>
        {!isAuthenticated && (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
        {isAuthenticated && <Link onClick={() => logout()}>Logout</Link>}

        <p>En🌐</p>
      </div>
    </div>
  );
}

export default AppNav;
