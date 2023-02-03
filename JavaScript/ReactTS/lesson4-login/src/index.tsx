import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './routers/AppRouters';
import "./style/bootstrap.min.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <AppRouters />
  </React.StrictMode>
);
