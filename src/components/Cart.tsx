import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <div className="list-group">
        {cartItems.map((item) => (
          <div className="list-group-item" key={item.id}>
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src={item.thumbnail} className="img-fluid" alt={item.title} />
              </div>
              <div className="col-md-4">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <div className="col-md-3">
                <div className="btn-group" role="group" aria-label="Quantity controls">
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span className="btn btn-light">{item.quantity}</span>
                  <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="col-md-3 text-end">
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout" className="btn btn-primary mt-3">Proceder al Pago</Link>
    </div>
  );
}

export default Cart;
