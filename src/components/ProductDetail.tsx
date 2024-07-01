import React, { useEffect, useState } from 'react'; // Importa React y los hooks useEffect y useState
import { useParams, useNavigate } from 'react-router-dom'; // Importa useParams y useNavigate desde react-router-dom para manejar los parámetros y la navegación
import { getProductDetail } from '../services/api'; // Importa la función getProductDetail desde el servicio API
import { useCart } from '../context/CartContext'; // Importa el hook useCart desde el contexto del carrito

// Define la interfaz ProductDetail para tipar los detalles del producto
interface ProductDetail {
  id: string;
  title: string;
  price: number;
  pictures: { id: string, url: string }[];
  description: string;
}

const ProductDetail: React.FC = () => { // Define un componente funcional llamado ProductDetail
  const { id } = useParams<{ id: string }>(); // Obtiene el parámetro id desde la URL
  const [product, setProduct] = useState<ProductDetail | null>(null); // Estado para almacenar los detalles del producto
  const { addToCart } = useCart(); // Obtiene la función addToCart desde el contexto del carrito
  const navigate = useNavigate(); // Inicializa el hook de navegación

  useEffect(() => { // Hook useEffect para manejar efectos secundarios
    if (id) { // Si hay un id
      getProductDetail(id).then(setProduct); // Obtiene los detalles del producto y actualiza el estado
    }
  }, [id]); // El efecto se ejecuta cuando cambia el id

  if (!product) return <div>Loading...</div>; // Si el producto no está cargado, muestra un mensaje de carga

  const handleAddToCart = () => { // Función que maneja la adición del producto al carrito
    if (product) { // Si hay un producto
      const productToAdd = { // Crea un objeto con los detalles del producto para agregar al carrito
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        thumbnail: product.pictures[0].url // Usa la primera imagen como miniatura
      };
      addToCart(productToAdd); // Añade el producto al carrito
    }
  };

  return (
    <div className="container mt-4"> {/* Contenedor principal con clases de Bootstrap */}
      <div className="card"> {/* Tarjeta para el detalle del producto */}
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1> {/* Título del producto */}
          <p className="card-text">${product.price}</p> {/* Precio del producto */}
          <div className="row">
            {product.pictures.map((pic) => ( // Mapea las imágenes del producto
              <div className="col-md-4" key={pic.id}> {/* Columna para cada imagen */}
                <img src={pic.url} className="img-fluid" alt={product.title} /> {/* Imagen del producto */}
              </div>
            ))}
          </div>
          <p className="card-text mt-3">{product.description}</p> {/* Descripción del producto */}
          <div className="btn-container">
            <button className="btn btn-primary me-2" onClick={handleAddToCart}>Comprar</button> {/* Botón para comprar */}
            <button className="btn btn-secondary" onClick={() => navigate('/cart')}>Ir al Carrito</button> {/* Botón para ir al carrito */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; // Exporta el componente ProductDetail como exportación predeterminada
