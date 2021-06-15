import InvoiceCard from './InvoiceCard';
//styles
import styles from './InvoiceTable.module.css';

export default function InvoiceTable({ invoices }) {
  return (
    <table className={styles.table}>
      <caption>The Beatles</caption>

      <thead className={styles.title}>
        <tr>
          <th className={styles.label}>Create</th>
          <th className={styles.label}>No</th>
          <th className={styles.label}>Supply</th>
          <th className={styles.label}>Comment</th>
          <th className={styles.label}>Change</th>
        </tr>
      </thead>
      <tbody>
        {invoices.length > 0 &&
          invoices.map(item => (
            <tr key={item.id}>
              <InvoiceCard item={item} />
            </tr>
          ))}
      </tbody>
    </table>
  );
}
