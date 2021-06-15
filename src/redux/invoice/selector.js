const getInvoice = state => state.invoice.items;
const getById = state => state.invoice.byId;

export default { getInvoice, getById };
