import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//styles redux
import styles from './Form.module.css';
import { operation } from '../../redux/invoice';

export default function Form() {
  const initialState = {
    number: '',
    date_created: '',
    date_supplied: '',
    comment: '',
  };
  const [invoice, setInvoice] = useState(initialState);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleBack = useCallback(() => {
    history.push('/');
  }, [history]);

  const addInvoice = useCallback(
    data => {
      dispatch(operation.addInvoice(data));
    },
    [dispatch],
  );

  const handleInput = useCallback(evt => {
    const value = evt.target.name;
    setInvoice(prev => ({ ...prev, [value]: evt.target.value }));
  }, []);

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      addInvoice(invoice);
      setInvoice(initialState);
      handleBack();
    },
    [addInvoice, invoice, handleBack, initialState],
  );
  return (
    <form className={styles.form_invoice} onSubmit={handleSubmit}>
      <span className={styles.input_box}>
        <label className={styles.form_label}>
          Number
          <input
            type="text"
            minLength="3"
            required
            className={styles.form_input}
            value={invoice.number}
            name="number"
            onChange={handleInput}
          />
        </label>
        <label className={styles.form_label}>
          Invoice Date
          <input
            type="date"
            required
            className={styles.form_input}
            value={invoice.date_created}
            name="date_created"
            onChange={handleInput}
          />
        </label>
        <label className={styles.form_label}>
          Supply Date
          <input
            type="date"
            required
            className={styles.form_input}
            value={invoice.date_supplied}
            name="date_supplied"
            onChange={handleInput}
          />
        </label>
      </span>
      <label className={styles.form_label}>
        Comment
        <textarea
          maxLength="160"
          className={styles.form_input}
          value={invoice.comment}
          name="comment"
          onChange={handleInput}
        ></textarea>
      </label>
      <button className={styles.form_btn} type="submit">
        Save
      </button>
    </form>
  );
}
