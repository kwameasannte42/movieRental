import React, { createContext, useState } from 'react';

export const RentalCartContext = createContext();

export const RentalCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <RentalCartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </RentalCartContext.Provider>
  );
};
