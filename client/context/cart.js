import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default useCart;
