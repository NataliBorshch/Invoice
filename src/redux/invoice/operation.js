import axios from 'axios';
import action from './action';

axios.defaults.baseURL = 'http://localhost:4040';

const getInvoice = () => dispatch => {
  dispatch(action.getInvoiceRequest());
  axios
    .get('/invoice')
    .then(({ data }) => dispatch(action.getInvoiceSuccess(data)))
    .catch(error => dispatch(action.getInvoiceError(error)));
};

const addInvoice = obj => dispatch => {
  dispatch(action.addInvoiceRequest());
  axios
    .post('/invoice', obj)
    .then(({ data }) => {
      dispatch(action.addInvoiceSuccess(data));
    })
    .catch(error => dispatch(action.addInvoiceError(error)));
};

const removeInvoice = id => dispatch => {
  dispatch(action.deleteInvoiceRequest());
  axios
    .delete(`/invoice/${id}`)
    .then(() => dispatch(action.deleteInvoiceSuccess(id)))
    .catch(error => dispatch(action.deleteInvoiceError(error)));
};

const updateInvoice = (id, data) => dispatch => {
  dispatch(action.updateInvoiceRequest());
  axios
    .put(`/invoice/${id}`, data)
    .then(({ data }) => {
      dispatch(action.updateInvoiceSuccess(data));
    })
    .catch(error => dispatch(action.updateInvoiceError(error)));
};

const getById = id => dispatch => {
  dispatch(action.getByIdInvoiceRequest());
  axios
    .get(`/invoice/${id}`)
    .then(({ data }) => {
      dispatch(action.getByIdInvoiceSuccess(data));
    })
    .catch(error => dispatch(action.getByIdInvoiceError(error)));
};

export default {
  getInvoice,
  addInvoice,
  removeInvoice,
  updateInvoice,
  getById,
};
