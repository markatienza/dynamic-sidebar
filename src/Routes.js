import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { ReactWithLayout } from './components';
import { MainLayout } from './layouts';
import { DashboardView, FinancerView } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <ReactWithLayout
        exact
        path="/dashboard"
        component={DashboardView}
        layout={MainLayout}
      />
      <ReactWithLayout
        exact
        path="/financers"
        component={FinancerView}
        layout={MainLayout}
      />
    </Switch>
  );
};

export default Routes;
