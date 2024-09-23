import Question from "./Question";
import styles from "./Questions.module.css";

function Questions() {
  return (
    <div className={styles.div}>
      <div className={styles.title}>
        <h2>Frequently Asked Questions</h2>
        <span></span>
      </div>
      <div className={styles.questions}>
        <Question question="Documents required to ship cars from the Emirates to Egypt (tourist - Tarbtic)?" />
        <Question question="Documents required for shipping cars under the special needs system?" />
        <Question
          question="Documents required to ship boats from the UAE to Saudi Arabia?"
          answer=""
        />
        <Question question="Documents required to ship cars from the UAE to Saudi Arabia?" />
        <Question question="What are the papers required to ship cars from the UAE to Egypt (final export)?" />
      </div>
    </div>
  );
}

export default Questions;
