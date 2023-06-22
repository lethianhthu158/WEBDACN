import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.nameProduct === product.nameProduct);
  
      if (existingProduct) {
        return prevCart.map((p) =>
          p.nameProduct === product.nameProduct
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      } else {
        return [...prevCart, product];
      }
    });
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
