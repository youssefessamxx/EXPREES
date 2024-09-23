import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";
import team4 from "../assets/team-4.png";

import styles from "./Team.module.css";

function Team() {
  return (
    <div className={styles.div}>
      <h2>Our Team</h2>
      <div className={styles.images}>
        <img src={team1} alt="" />
        <img src={team2} alt="" />
        <img src={team3} alt="" />
        <img src={team4} alt="" />
      </div>
    </div>
  );
}

export default Team;
