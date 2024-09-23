// import icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import logo from "../assets/logo.png";
import appleApp from "../assets/app-store.png";
import googleApp from "../assets/google-store.png";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.div}>
      <div>
        <img src={logo} alt="" />
        <p>
          For shipping and cargo transportation services,and car shipping to all
          parts of the world,and customs clearance services in the UAE.
        </p>
        <nav className={styles.socialMedia}>
          <ul>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGoogle />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="#">
                <RiTwitterXLine />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h2>Menu</h2>
        <nav className={styles.links}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About US</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Track</a>
            </li>

            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h2>Our Services</h2>
        <ul>
          <li>Land transport</li>
          <li>Sea transport</li>
          <li>Air transport</li>
        </ul>
      </div>
      <div>
        <h2>Location</h2>
        <ul>
          <li>Amwaj Al Bahar Cargo Transport</li>
          <li>T.0971 50209 1000</li>
          <li>
            <a href="Info@EXPREES.COM">Info@EXPREES.COM</a>
          </li>
        </ul>
      </div>
      <div className={styles.app}>
        <h2>Download the app by :</h2>
        <img src={appleApp} alt="" />
        <img src={googleApp} alt="" />
      </div>
    </div>
  );
}

export default Footer;
