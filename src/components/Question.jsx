import styles from "./Question.module.css";

// eslint-disable-next-line react/prop-types
function Question({ question, answer = "" }) {
  return (
    <div className={styles.div}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
}

export default Question;
