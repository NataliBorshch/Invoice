import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { operation } from '../redux/invoice';
//component style
import styles from './Main.module.css';
import FormUpdate from '../components/Form/FormUpdate';

export default function UpdateInvoiceView() {
  let location = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.replace('/update-invoice/', '');
  useEffect(() => {
    dispatch(operation.getById(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className={styles.main_title}>
        <span>Update Invoice</span>
      </div>
      <div className={styles.box_form}>
        <FormUpdate />
      </div>
    </div>
  );
}
