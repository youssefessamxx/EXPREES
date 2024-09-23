import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";

import styles from "./Client.module.css";

function Client() {
  return (
    <div className={styles.div}>
      <h2>Our Client Says</h2>
      <div className={styles.clients}>
        <img src={client1} alt="" />
        <img src={client2} alt="" />
        <img src={client3} alt="" />
        <img src={client4} alt="" />
      </div>
      <div className={styles.swiper}>
        <div className={styles.swiper1}></div>
        <div className={styles.swiper2}></div>
        <div className={styles.swiper3}></div>
        <div className={styles.swiper4}></div>
      </div>
    </div>
  );
}

export default Client;
