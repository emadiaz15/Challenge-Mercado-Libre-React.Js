import React from 'react'; // Importa React
import { useCart } from '../context/CartContext'; // Importa el hook useCart desde el contexto del carrito
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom para la navegación

const Checkout: React.FC = () => { // Define un componente funcional llamado Checkout
  const { cartItems, clearCart } = useCart(); // Obtiene cartItems y clearCart del contexto del carrito
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleCheckout = () => { // Función que maneja la confirmación de la compra
    clearCart(); // Limpia el carrito
    navigate('/'); // Navega a la página principal
    alert('Compra realizada con éxito'); // Muestra un mensaje de éxito
  };

  // Calcula el subtotal sumando el precio por la cantidad de cada ítem en el carrito
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.21; // Calcula el IVA (21% del subtotal)
  const total = subtotal + vat; // Calcula el total sumando el subtotal y el IVA

  return (
    <div className="container mt-4 d-lg-flex"> {/* Contenedor principal con clases de Bootstrap */}
      <div className="box-1 bg-light user"> {/* Caja 1: Resumen de Compra */}
        <h2>Resumen de Compra</h2>
        <div className="list-group mb-4"> {/* Lista de ítems en el carrito */}
          {cartItems.map((item) => (
            <div className="list-group-item py-2" key={item.id}> {/* Ítem individual del carrito */}
              <div className="row align-items-center"> {/* Fila con alineación central */}
                <div className="col-md-2"> {/* Columna para la imagen del ítem */}
                  <img src={item.thumbnail} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-4"> {/* Columna para el título y precio del ítem */}
                  <h5 className="mb-0">{item.title}</h5>
                  <p className="mb-0">${item.price}</p>
                </div>
                <div className="col-md-3"> {/* Columna para la cantidad del ítem */}
                  <span className="btn btn-light">{item.quantity}</span>
                </div>
                <div className="col-md-3 text-end"> {/* Columna para el precio total del ítem */}
                  <p className="mb-0">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="box-2"> {/* Caja 2: Detalles de Pago */}
        <div className="box-inner-2">
          <div>
            <p className="fw-bold">Detalles de Pago</p>
            <form>
              <div className="mb-3"> {/* Campo de correo electrónico */}
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
                <div className="my-3 cardname"> {/* Campo de nombre y apellido */}
                  <p className="dis fw-bold mb-2">Nombre y Apellido</p>
                  <input className="form-control" type="text" />
                </div>
                <div className="address"> {/* Campo de dirección */}
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
              <div className="d-flex align-items-center justify-content-between mb-2"> {/* Subtotal */}
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2"> {/* IVA */}
                <p>VAT<span>(21%)</span></p>
                <p>${vat.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2"> {/* Total */}
                <p className="fw-bold">Total</p>
                <p className="fw-bold">${total.toFixed(2)}</p>
              </div>
              <button className="btn btn-primary mt-3" onClick={handleCheckout}>Confirmar Compra</button> {/* Botón de confirmación de compra */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; // Exporta el componente Checkout como exportación predeterminada
