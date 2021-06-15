import { createAction } from '@reduxjs/toolkit';

const getInvoiceRequest = createAction('invoice/getInvoiceRequest');
const getInvoiceSuccess = createAction('invoice/getInvoiceSuccess');
const getInvoiceError = createAction('invoice/getInvoiceError');

const addInvoiceRequest = createAction('invoice/addInvoiceRequest');
const addInvoiceSuccess = createAction('invoice/addInvoiceSuccess');
const addInvoiceError = createAction('invoice/addInvoiceError');

const deleteInvoiceRequest = createAction('invoice/deleteInvoiceRequest');
const deleteInvoiceSuccess = createAction('invoice/deleteInvoiceSuccess');
const deleteInvoiceError = createAction('invoice/deleteInvoiceError');

const updateInvoiceRequest = createAction('invoice/updateInvoiceRequest');
const updateInvoiceSuccess = createAction('invoice/updateInvoiceSuccess');
const updateInvoiceError = createAction('invoice/updateInvoiceError');

const getByIdInvoiceRequest = createAction('invoice/getByIdInvoiceRequest');
const getByIdInvoiceSuccess = createAction('invoice/getByIdInvoiceSuccess');
const getByIdInvoiceError = createAction('invoice/getByIdInvoiceError');

export default {
  getInvoiceRequest,
  getInvoiceSuccess,
  getInvoiceError,
  addInvoiceRequest,
  addInvoiceSuccess,
  addInvoiceError,
  deleteInvoiceRequest,
  deleteInvoiceSuccess,
  deleteInvoiceError,
  updateInvoiceRequest,
  updateInvoiceSuccess,
  updateInvoiceError,
  getByIdInvoiceRequest,
  getByIdInvoiceSuccess,
  getByIdInvoiceError,
};
