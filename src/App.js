import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import routers from './routers';

const MainPage = lazy(() =>
  import('./views/MainView' /* webpackChunkName: "main-view" */),
);
const CreateInvoicePage = lazy(() =>
  import(
    './views/CreateInvoiceView' /* webpackChunkName: "create-invoice-view" */
  ),
);
const UpdateInvoicePage = lazy(() =>
  import(
    './views/UpadateInvoiceView' /* webpackChunkName: "update-invoice-view" */
  ),
);

function App() {
  return (
    <Container>
      <Suspense fallback="загружаем">
        <Switch>
          <Route exact path={routers.main} component={MainPage} />
          <Route path={routers.createInvoice} component={CreateInvoicePage} />
          <Route path={routers.updateInvoice} component={UpdateInvoicePage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
