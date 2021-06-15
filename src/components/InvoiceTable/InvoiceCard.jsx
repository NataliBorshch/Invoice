import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
//styles comp redux
import Icon from '../Icon';
import styles from './InvoiceTable.module.css';
import { operation } from '../../redux/invoice';

export default function InvoiceCard({ item }) {
  const dispatch = useDispatch();
  const onRemove = id => dispatch(operation.removeInvoice(id));

  return (
    <>
      <th>{item.date_created}</th>
      <th>{item.number}</th>
      <th>{item.date_supplied}</th>
      <th>{item.comment}</th>
      <th>
        <button
          type="button"
          className={styles.table_btn}
          onClick={() => onRemove(item.id)}
        >
          <Icon icon="delite" size={20} color="purple" />
        </button>
        <NavLink
          exact
          to={{
            pathname: `/update-invoice/${item.id}`,
          }}
          className={styles.table_update}
        >
          <Icon icon="pencil" size={20} color="purple" />
        </NavLink>
      </th>
    </>
  );
}
