import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Global } from '@emotion/react';
import { Globalstyles } from 'styles/Global';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={Globalstyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
