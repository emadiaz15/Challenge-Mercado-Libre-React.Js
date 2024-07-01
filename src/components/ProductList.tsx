import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleBuy = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card h-100 cart-item" onClick={() => handleBuy(product.id)}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-success mt-2">Comprar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
