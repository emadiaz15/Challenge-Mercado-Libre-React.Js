import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/?q=${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mercado Libre</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input 
              type="text" 
              className="form-control me-2" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              placeholder="Buscar productos" 
              style={{ color: 'black' }} // Asegurar que el texto sea negro
            />
            <button className="btn btn-outline-light" type="button" onClick={handleSearch}>Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
