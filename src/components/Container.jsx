import containerCar from "../assets/container-car.png";

import styles from "./Container.module.css";

function Container() {
  return (
    <div className={styles.div}>
      <div className={styles.info_container}>
        <p className={styles.p1}>
          Multi-modal container units: <br /> Efficient solutions for cargo
          transportation and management
        </p>
        <p>
          Multi-modal container units, designed as reusable carriers to
          facilitate unit laod handling of the goods contained , are also
          referred to as cargo , specially by shipping lines and logistics
          operatars.
        </p>
        <div className={styles.swipers}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.img_container}>
        <img src={containerCar} alt="" />
      </div>
    </div>
  );
}

export default Container;
