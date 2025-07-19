import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';

// Monta la aplicación dentro del elemento con id "root" en el HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);
