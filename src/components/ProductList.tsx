import React from 'react'; // Importa React
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom para la navegación

// Define la interfaz Product para tipar los productos
interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

// Define la interfaz ProductListProps para tipar las propiedades del componente ProductList
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => { // Define un componente funcional llamado ProductList
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleBuy = (id: string) => { // Función que maneja la compra del producto
    navigate(`/product/${id}`); // Navega a la página de detalles del producto
  };

  return (
    <div className="row"> {/* Contenedor de filas con clases de Bootstrap */}
      {products.map((product) => ( // Mapea los productos para mostrarlos
        <div className="col-md-4 mb-3" key={product.id}> {/* Columna para cada producto */}
          <div className="card h-100 cart-item" onClick={() => handleBuy(product.id)}> {/* Tarjeta para el producto */}
            <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '150px', objectFit: 'cover' }} /> {/* Imagen del producto */}
            <div className="card-body"> {/* Cuerpo de la tarjeta */}
              <h5 className="card-title">{product.title}</h5> {/* Título del producto */}
              <p className="card-text">${product.price}</p> {/* Precio del producto */}
              <button className="btn btn-success mt-2">Comprar</button> {/* Botón de compra */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList; // Exporta el componente ProductList como exportación predeterminada
