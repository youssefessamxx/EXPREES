// import icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

// style
import styles from "./SubNav.module.css";

function SubNav() {
  return (
    <div className={styles.div}>
      <a className={styles.a} href="https://Info@EXPREES.Com" target="_blank">
        Info@EXPREES.Com
      </a>
      <nav className={styles.nav}>
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
  );
}

export default SubNav;
