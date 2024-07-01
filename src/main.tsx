// src/main.tsx
import React from 'react'; // Importa React
import ReactDOM from 'react-dom'; // Importa ReactDOM para renderizar la aplicación
import App from './App'; // Importa el componente principal App
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './index.css'; // Importa los estilos personalizados

// Renderiza la aplicación dentro del elemento con id 'root' en el documento HTML
ReactDOM.render(
  <React.StrictMode> {/* Envuelve la aplicación en StrictMode para activar verificaciones adicionales y advertencias */}
    <App /> {/* Renderiza el componente principal App */}
  </React.StrictMode>,
  document.getElementById('root') // Especifica el elemento DOM donde se montará la aplicación
);
