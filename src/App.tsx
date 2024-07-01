// src/App.tsx
import React from 'react'; // Importa React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router, Routes y Route desde react-router-dom para manejar la navegación
import HomePage from './components/HomePage'; // Importa el componente HomePage
import ProductDetail from './components/ProductDetail'; // Importa el componente ProductDetail
import Cart from './components/Cart'; // Importa el componente Cart
import Checkout from './components/Checkout'; // Importa el componente Checkout
import { CartProvider } from './context/CartContext'; // Importa el proveedor del contexto del carrito

const App: React.FC = () => { // Define un componente funcional llamado App
  return (
    <CartProvider> {/* Proveedor del contexto del carrito envuelve la aplicación */}
      <Router> {/* Componente Router para manejar la navegación */}
        <Routes> {/* Componente Routes que contiene las rutas de la aplicación */}
          <Route path="/" element={<HomePage />} /> {/* Ruta para la página principal */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Ruta para los detalles del producto */}
          <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
          <Route path="/checkout" element={<Checkout />} /> {/* Ruta para el proceso de compra */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App; // Exporta el componente App como exportación predeterminada
