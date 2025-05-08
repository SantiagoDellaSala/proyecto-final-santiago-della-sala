import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Componente proveedor
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (card) => {
    setCartItems((prevItems) => [...prevItems, card]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item, index) => index !== id));
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
