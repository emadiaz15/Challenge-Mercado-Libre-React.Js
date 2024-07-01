import React, { useState } from 'react'; // Importa React y el hook useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate desde react-router-dom para la navegación

const Navbar: React.FC = () => { // Define un componente funcional llamado Navbar
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para almacenar el término de búsqueda
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleSearch = () => { // Función que maneja la búsqueda
    navigate(`/?q=${searchTerm}`); // Navega a la página principal con el término de búsqueda en la URL
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar mb-4"> {/* Barra de navegación con clases de Bootstrap */}
      <div className="container-fluid"> {/* Contenedor fluido */}
        <Link className="navbar-brand" to="/">Mercado Libre</Link> {/* Enlace a la página principal */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> {/* Ícono del toggler */}
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse"> {/* Contenedor colapsable de la barra de navegación */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0"> {/* Lista de elementos de navegación */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link> {/* Enlace a la página principal */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link> {/* Enlace al carrito */}
            </li>
          </ul>
          <form className="d-flex"> {/* Formulario de búsqueda */}
            <input 
              type="text" 
              className="form-control me-2" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Buscar productos" 
              style={{ color: 'black' }} // Asegurar que el texto sea negro
            />
            <button className="btn btn-outline-light" type="button" onClick={handleSearch}>Buscar</button> {/* Botón de búsqueda */}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Exporta el componente Navbar como exportación predeterminada
