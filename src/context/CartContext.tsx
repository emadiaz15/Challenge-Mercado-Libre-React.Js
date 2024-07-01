import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'; // Importa las funciones necesarias de React

// Define la interfaz Product para tipar los productos en el carrito
interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

// Define la interfaz CartState para el estado del carrito
interface CartState {
  cartItems: Product[];
}

// Define la interfaz CartContextProps para las propiedades del contexto del carrito
interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Crea el contexto del carrito
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Define el reducer para manejar las acciones del carrito
const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': // Maneja la acción de agregar al carrito
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case 'REMOVE_FROM_CART': // Maneja la acción de eliminar del carrito
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case 'UPDATE_QUANTITY': // Maneja la acción de actualizar la cantidad
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    case 'UPDATE_CART': // Maneja la acción de actualizar el carrito desde el almacenamiento
      return {
        ...state,
        cartItems: action.payload
      };
    case 'CLEAR_CART': // Maneja la acción de limpiar el carrito
      return {
        ...state,
        cartItems: []
      };
    default: // Devuelve el estado actual por defecto
      return state;
  }
};

// Define el proveedor del contexto del carrito
const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] }); // Usa el hook useReducer para manejar el estado del carrito

  // Efecto para cargar los ítems del carrito desde el localStorage al montar el componente
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      dispatch({ type: 'UPDATE_CART', payload: JSON.parse(storedCartItems) });
    }
  }, []);

  // Efecto para guardar los ítems del carrito en el localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // Función para agregar un producto al carrito
  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children} {/* Renderiza los componentes hijos */}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider'); // Lanza un error si el hook se usa fuera del CartProvider
  }
  return context; // Devuelve el contexto del carrito
};

export { CartProvider, useCart }; // Exporta el proveedor y el hook del carrito
