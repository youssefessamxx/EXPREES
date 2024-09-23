import { Link } from "react-router-dom";
import styles from "./ArrowQuotation.module.css";
import { useEffect, useState } from "react";

function ArrowQuotation() {
  const [showDiv, setShowDiv] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 900) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showDiv && (
        <div className={styles.div}>
          <Link to="quotation">Get Quotation</Link>
        </div>
      )}
    </div>
  );
}

export default ArrowQuotation;
