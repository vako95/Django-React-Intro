import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from "./app/App.jsx";
import { BrowserRouter } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
