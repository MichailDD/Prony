import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
<<<<<<< HEAD
import { BrowserRouter, HashRouter } from 'react-router-dom';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> efb211d1fba5339447673ebba58f72b4f58fbb72

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
