import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => (
        <Layout>
          <Component {...routerProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
