import AppNav from "../components/AppNav";
import Footer from "../components/Footer";
import Quotation from "../components/Quotation";
import SubNav from "../components/SubNav";

import styles from "./QuotationsPage.module.css";

function QuotationPage() {
  return (
    <div className={styles.div}>
      <SubNav />
      <AppNav />
      <Quotation />
      <Footer />
    </div>
  );
}

export default QuotationPage;
