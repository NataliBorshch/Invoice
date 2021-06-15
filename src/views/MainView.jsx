import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//styles redux comp route
import { operation, selector } from '../redux/invoice';
import InvoiceTable from '../components/InvoiceTable';
import styles from './Main.module.css';
import routers from '../routers';

export default function MainView() {
  const invoices = useSelector(selector.getInvoice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.getInvoice());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <span>Invoices</span>
      </div>
      <div className={styles.main_action}>
        <p>Actions</p>
        <NavLink to={routers.createInvoice} className={styles.main_btn}>
          Add new
        </NavLink>
      </div>
      <div className={styles.tablie_invoice}>
        <InvoiceTable invoices={invoices} />
      </div>
    </div>
  );
}
