import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import { useLocation } from 'react-router-dom'; // Importa useLocation desde react-router-dom para obtener la ubicación actual
import Navbar from './NavBar'; // Asegúrate de que esta ruta sea correcta
import Carousel from './Carousel'; // Importa el nuevo componente Carousel
import Footer from './Footer'; // Importa el componente Footer
import ProductList from './ProductList'; // Importa el componente ProductList
import CartItem from './CartItem'; // Importa el componente CartItem
import { searchProducts, getRandomProducts } from '../services/api'; // Importa las funciones de la API

// Define la interfaz Product para tipar los productos
interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

const HomePage: React.FC = () => { // Define un componente funcional llamado HomePage
  const [products, setProducts] = useState<Product[]>([]); // Estado para almacenar los productos de la búsqueda
  const [randomProducts, setRandomProducts] = useState<Product[]>([]); // Estado para almacenar productos aleatorios
  const location = useLocation(); // Hook para obtener la ubicación actual
  const query = new URLSearchParams(location.search).get('q'); // Obtiene el parámetro de búsqueda 'q' de la URL

  useEffect(() => { // Hook useEffect para manejar efectos secundarios
    if (query) { // Si hay una consulta de búsqueda
      searchProducts(query).then((data) => setProducts(data.results)); // Busca productos y actualiza el estado
    } else { // Si no hay una consulta de búsqueda
      const fetchRandomProducts = () => {
        getRandomProducts().then(setRandomProducts); // Obtiene productos aleatorios y actualiza el estado
      };

      fetchRandomProducts(); // Llama a la función para obtener productos aleatorios inicialmente
      const intervalId = setInterval(fetchRandomProducts, 60000); // Llama a la función cada minuto

      return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }
  }, [query]); // Dependencia de query para ejecutar el efecto cuando cambia

  return (
    <div>
      <Navbar /> {/* Incluye el componente Navbar */}
      <Carousel /> {/* Incluye el componente Carousel */}
      <div className="container mt-4">
        {query ? ( // Si hay una consulta de búsqueda, muestra los resultados de la búsqueda
          <>
            <h2>Resultados de la Búsqueda</h2>
            <ProductList products={products} /> {/* Componente para listar los productos */}
          </>
        ) : ( // Si no hay una consulta de búsqueda, muestra productos aleatorios
          <>
            <h2>Los más destacados</h2>
            <div className="row">
              {randomProducts.slice(0, 8).map((item) => ( // Muestra hasta 8 productos aleatorios
                <div className="col-md-3 mb-4" key={item.id}>
                  <CartItem item={item} /> {/* Componente para mostrar cada producto */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer /> {/* Incluye el componente Footer */}
    </div>
  );
}

export default HomePage; // Exporta el componente HomePage como exportación predeterminada
