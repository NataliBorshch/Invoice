import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//style redux
import styles from './Form.module.css';
import { operation, selector } from '../../redux/invoice';

export default function FormUpdate() {
  const invoice = useSelector(selector.getById);
  const dispatch = useDispatch();
  const history = useHistory();
  const [invoiceData, setInvoiceData] = useState(invoice);

  useEffect(() => {
    setInvoiceData(invoice);
  }, [invoice]);

  const handleInput = useCallback(evt => {
    const value = evt.target.name;
    setInvoiceData(prev => ({ ...prev, [value]: evt.target.value }));
  }, []);

  const handleBack = useCallback(() => {
    history.push('/');
  }, [history]);

  const updateInvoice = useCallback(
    data => {
      dispatch(operation.updateInvoice(data.id, data));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      updateInvoice(invoiceData);
      handleBack();
    },
    [handleBack, updateInvoice, invoiceData],
  );

  return (
    invoice && (
      <form className={styles.form_invoice} onSubmit={handleSubmit}>
        <span className={styles.input_box}>
          <label className={styles.form_label}>
            Number
            <input
              type="text"
              minLength="3"
              required
              className={styles.form_input}
              name="number"
              value={invoiceData.number}
              onChange={handleInput}
            />
          </label>
          <label className={styles.form_label}>
            Invoice Date
            <input
              type="date"
              required
              className={styles.form_input}
              name="date_created"
              value={invoiceData.date_created}
              onChange={handleInput}
            />
          </label>
          <label className={styles.form_label}>
            Supply Date
            <input
              type="date"
              required
              className={styles.form_input}
              name="date_supplied"
              value={invoiceData.date_supplied}
              onChange={handleInput}
            />
          </label>
        </span>
        <label className={styles.form_label}>
          Comment
          <textarea
            maxLength="160"
            className={styles.form_input}
            name="comment"
            value={invoiceData.comment}
            onChange={handleInput}
          ></textarea>
        </label>
        <button className={styles.form_btn} type="submit">
          Save
        </button>
      </form>
    )
  );
}
