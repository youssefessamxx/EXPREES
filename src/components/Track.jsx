import { Link } from "react-router-dom";
import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.div} id="Track">
      <Link to="quotation" className={styles.quotation}>
        Get Quotation
      </Link>
      <div className={styles.track}>
        <input
          type="text"
          name="track"
          placeholder="Insert tracking number here..."
        />
        <button type="submit">Track</button>
      </div>
    </div>
  );
}

export default Track;
