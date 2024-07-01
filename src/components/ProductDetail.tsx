import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductDetail } from '../services/api';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  title: string;
  price: number;
  pictures: { id: string, url: string }[];
  description: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { setCartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProductDetail(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">${product.price}</p>
          <div className="row">
            {product.pictures.map((pic) => (
              <div className="col-md-4" key={pic.id}>
                <img src={pic.url} className="img-fluid" alt={product.title} />
              </div>
            ))}
          </div>
          <p className="card-text mt-3">{product.description}</p>
          <div className="btn-container">
            <button className="btn btn-primary me-2" onClick={addToCart}>Comprar</button>
            <button className="btn btn-secondary" onClick={() => navigate('/cart')}>Ir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
