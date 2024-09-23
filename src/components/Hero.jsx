import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.div}>
      <div className={styles.text}>
        <h1>
          Welcome <span>injaz exprees!</span>
        </h1>
        <p>
          For shipping and cargo transportaion services,and car shipping to all
          parts of the world,and customs clearance services int the UAE.
        </p>
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

export default Hero;
