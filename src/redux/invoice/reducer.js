import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './action';

const items = createReducer([], {
  [action.getInvoiceSuccess]: (_, { payload }) => [...payload],
  [action.addInvoiceSuccess]: (state, { payload }) => [...state, payload],
  [action.updateInvoiceSuccess]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id ? [item, ...payload] : [payload],
    ),
  [action.deleteInvoiceSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const byId = createReducer('', {
  [action.getByIdInvoiceSuccess]: (_, { payload }) => payload,
});
const invoiceReducer = combineReducers({
  items,
  byId,
});

export default invoiceReducer;
