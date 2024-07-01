import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate('/'); 
    alert('Compra realizada con éxito');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.21; 
  const total = subtotal + vat;

  return (
    <div className="container mt-4 d-lg-flex">
      <div className="box-1 bg-light user">
        <h2>Resumen de Compra</h2>
        <div className="list-group mb-4">
          {cartItems.map((item) => (
            <div className="list-group-item py-2" key={item.id}>
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img src={item.thumbnail} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-4">
                  <h5 className="mb-0">{item.title}</h5>
                  <p className="mb-0">${item.price}</p>
                </div>
                <div className="col-md-3">
                  <span className="btn btn-light">{item.quantity}</span>
                </div>
                <div className="col-md-3 text-end">
                  <p className="mb-0">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="box-2">
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Detalles de Pago</p>
            <form>
              <div className="mb-3">
                <p className="dis fw-bold mb-2">Correo Electrónico</p>
                <input className="form-control" type="email"/>
              </div>
              <div>
                <p className="dis fw-bold mb-2">Datos de Tarjeta</p>
                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                  <div className="fab fa-cc-visa ps-3"></div>
                  <input type="text" className="form-control" placeholder="Número" />
                  <div className="d-flex w-50">
                    <input type="text" className="form-control px-0" placeholder="MM/YY" />
                    <input type="password" maxLength={3} className="form-control px-0" placeholder="CVV" />
                  </div>
                </div>
                <div className="my-3 cardname">
                  <p className="dis fw-bold mb-2">Nombre y Apellido</p>
                  <input className="form-control" type="text" />
                </div>
                <div className="address">
                  <p className="dis fw-bold mb-3">Pais</p>
                  <select className="form-select" aria-label="Default select example">
                    <option selected hidden>Argentina</option>
                    <option value="1">Uruguay</option>
                    <option value="2">Australia</option>
                    <option value="3">Canada</option>
                  </select>
                  <div className="d-flex">
                    <input className="form-control zip" type="text" placeholder="CP" />
                    <input className="form-control state" type="text" placeholder="Provincia" />
                  </div>
                </div>
              </div>
            </form>
            <div className="d-flex flex-column dis">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p>VAT<span>(21%)</span></p>
                <p>${vat.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">${total.toFixed(2)}</p>
              </div>
              <button className="btn btn-primary mt-3" onClick={handleCheckout}>Confirmar Compra</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
