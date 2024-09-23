// images
import service1 from "../assets/service_1.png";
import service2 from "../assets/service_2.png";
import service3 from "../assets/service_3.png";

import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.div} id="Services">
      <h1>Our Services</h1>
      <div className={styles.services}>
        <img src={service1} alt="" />
        <img src={service2} alt="" />
        <img src={service3} alt="" />
      </div>
    </div>
  );
}

export default Services;
