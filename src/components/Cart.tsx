import React from 'react'; // Importa React
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para la navegación
import { useCart } from '../context/CartContext'; // Importa el hook useCart desde el contexto del carrito

const Cart: React.FC = () => { // Define un componente funcional llamado Cart
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Obtiene cartItems, removeFromCart y updateQuantity del contexto del carrito

  // Calcula el total del carrito sumando el precio por la cantidad de cada ítem
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Maneja el cambio de cantidad de un ítem en el carrito
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity); // Actualiza la cantidad del ítem si es mayor que 0
    }
  };

  return (
    <div className="container mt-4"> {/* Contenedor principal del carrito */}
      <h2>Carrito de Compras</h2>
      <div className="list-group"> {/* Lista de ítems en el carrito */}
        {cartItems.map((item) => (
          <div className="list-group-item" key={item.id}> {/* Ítem individual del carrito */}
            <div className="row align-items-center"> {/* Fila con alineación central */}
              <div className="col-md-2"> {/* Columna para la imagen del ítem */}
                <img src={item.thumbnail} className="img-fluid" alt={item.title} />
              </div>
              <div className="col-md-4"> {/* Columna para el título y precio del ítem */}
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <div className="col-md-3"> {/* Columna para los controles de cantidad */}
                <div className="btn-group" role="group" aria-label="Quantity controls">
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span className="btn btn-light">{item.quantity}</span>
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="col-md-3 text-end"> {/* Columna para el botón de eliminar */}
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3> {/* Muestra el total del carrito */}
      <Link to="/checkout" className="btn btn-primary mt-3">Proceder al Pago</Link> {/* Enlace para proceder al pago */}
    </div>
  );
}

export default Cart; // Exporta el componente Cart como exportación predeterminada
