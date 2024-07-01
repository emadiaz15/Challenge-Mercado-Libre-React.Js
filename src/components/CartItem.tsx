import React from 'react';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="card h-100 text-decoration-none text-dark cart-item">
      <img src={item.thumbnail} className="card-img-top" alt={item.title} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">${item.price}</p>
        <div className="btn-container">
          <button className="btn btn-success">Comprar</button>
        </div>
      </div>
    </Link>
  );
}

export default CartItem;
