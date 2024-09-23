import about1 from "../assets/about-1.png";
import about2 from "../assets/about-2.png";
import about3 from "../assets/about-3.png";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.div} id="About">
      <img src={about1} alt="" />
      <img src={about2} alt="" />
      <img src={about3} alt="" />
    </div>
  );
}

export default About;
