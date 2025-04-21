import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './authContext';
import reportWebVitals from './reportWebVitals';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
    <ToastContainer/>
  </BrowserRouter>,
)

reportWebVitals();
