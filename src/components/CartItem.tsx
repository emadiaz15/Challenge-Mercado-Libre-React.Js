import React from 'react'; // Importa React
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación

// Define la interfaz para las propiedades del componente CartItem
interface CartItemProps {
  item: {
    id: string; // ID del producto
    title: string; // Título del producto
    price: number; // Precio del producto
    thumbnail: string; // URL de la imagen en miniatura del producto
  };
}

// Define el componente funcional CartItem
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="card h-100 text-decoration-none text-dark cart-item">
      {/* Enlace al detalle del producto con estilos de Bootstrap */}
      <img src={item.thumbnail} className="card-img-top" alt={item.title} style={{ height: '150px', objectFit: 'cover' }} />
      {/* Imagen del producto */}
      <div className="card-body">
        {/* Contenedor del cuerpo de la tarjeta */}
        <h5 className="card-title">{item.title}</h5>
        {/* Título del producto */}
        <p className="card-text">${item.price}</p>
        {/* Precio del producto */}
        <div className="btn-container">
          {/* Contenedor del botón */}
          <button className="btn btn-success">Comprar</button>
          {/* Botón de compra */}
        </div>
      </div>
    </Link>
  );
}

export default CartItem; // Exporta el componente CartItem como exportación predeterminada
