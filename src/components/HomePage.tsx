import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar'; // Asegúrate de que esta ruta sea correcta
import Carousel from './Carousel'; // Importa el nuevo componente Carousel
import Footer from './Footer';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { searchProducts, getRandomProducts } from '../services/api';

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      searchProducts(query).then((data) => setProducts(data.results));
    } else {
      const fetchRandomProducts = () => {
        getRandomProducts().then(setRandomProducts);
      };

      fetchRandomProducts(); // Fetch initially
      const intervalId = setInterval(fetchRandomProducts, 60000); // Fetch every minute

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
  }, [query]);

  return (
    <div>
      <Navbar /> {/* Incluye el componente Navbar */}
      <Carousel /> {/* Incluye el componente Carousel */}
      <div className="container mt-4">
        {query ? (
          <>
            <h2>Resultados de la Búsqueda</h2>
            <ProductList products={products} />
          </>
        ) : (
          <>
            <h2>Los mas destacado</h2>
            <div className="row">
              {randomProducts.slice(0, 8).map((item) => (
                <div className="col-md-3 mb-4" key={item.id}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
