// Importa StrictMode, una herramienta de desarrollo que ayuda a detectar errores potenciales
import { StrictMode } from 'react'

// Importa la función para crear el root de la app (nuevo en React 18)
import { createRoot } from 'react-dom/client'

// Importa los estilos globales
import './index.css'

// Importa el componente principal de la aplicación
import App from './App.tsx'

// Monta la aplicación dentro del elemento con id "root" en el HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Renderiza la App dentro de StrictMode para verificar buenas prácticas en desarrollo */}
    <App />
  </StrictMode>
);
