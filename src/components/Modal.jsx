/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";

function Modal({ onClose }) {
  return (
    <div className={styles.bgDark}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <p>
            Your data will be reviewed, and we will contact you via email or
            mobile phone
          </p>
          <button onClick={() => onClose(false)}>ok</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
