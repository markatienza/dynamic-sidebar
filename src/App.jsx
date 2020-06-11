import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

// Routes
import Routes from './Routes';

const browserHistory = createBrowserHistory();
const baseTheme = createMuiTheme();

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
