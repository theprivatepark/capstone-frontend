import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Crimson Text, serif'
  },
  palette: {
    background: {
      default: '#f5f3ec' //tan
    }
  }
});


ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

