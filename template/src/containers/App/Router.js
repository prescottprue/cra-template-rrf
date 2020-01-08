import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createRoutes from '../../routes/index';

const Routes = createRoutes();

function Router() {
  return (
    <div>
      <BrowserRouter>{Routes}</BrowserRouter>
    </div>
  );
}

export default Router;
