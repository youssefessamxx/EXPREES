// logos
import sp1 from "../assets/2-removebg-preview 1.png";
import sp2 from "../assets/3-removebg-preview 1.png";
import sp3 from "../assets/4-removebg-preview 1.png";
import sp4 from "../assets/5-removebg-preview 1.png";
import sp5 from "../assets/6-removebg-preview 1.png";

import styles from "./SponsorsLogos.module.css";

function sponsors() {
  return (
    <div className={styles.div}>
      <img src={sp1} alt="" />
      <img src={sp2} alt="" />
      <img src={sp3} alt="" />
      <img src={sp4} alt="" />
      <img src={sp5} alt="" />
    </div>
  );
}

export default sponsors;
