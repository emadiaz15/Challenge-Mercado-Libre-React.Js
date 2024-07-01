import React from 'react'; // Importa React

const Footer: React.FC = () => { // Define un componente funcional llamado Footer
  return (
    <footer className="custom-footer text-center p-3 mt-4"> {/* Define el elemento footer con clases de Bootstrap */}
      <div className="container"> {/* Contenedor centralizado */}
        <p>© 2024 Mercado Libre. Todos los derechos reservados.</p> {/* Texto del footer */}
      </div>
    </footer>
  );
}

export default Footer; // Exporta el componente Footer como exportación predeterminada
