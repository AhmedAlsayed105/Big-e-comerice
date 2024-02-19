import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "../src/routes/index.jsx"
import { Provider } from 'react-redux';
import  Store  from './Redux/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>,
)
