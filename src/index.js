import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css';
import './index.css';
import { App } from './App';
import { StoresProvider, stores } from "./store/stores";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoresProvider value={stores}>
      <App />
    </StoresProvider>
  </React.StrictMode>
);