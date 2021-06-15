import Form from "../components/Form";
import styles from "./Main.module.css";

export default function CreateInvoiceView() {
  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <span>Create Invoice</span>
      </div>
      <div className={styles.box_form}>
        <Form />
      </div>
    </div>
  );
}
