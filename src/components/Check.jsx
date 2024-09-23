import styles from "./Check.module.css";
function Check() {
  return (
    <div className={styles.div} id="Check">
      <div>
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

export default Check;
