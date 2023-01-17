import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discounted, setDiscounted] = useState(false);
  const [total, setTotal] = useState(0);
  console.log(total);

  useEffect(() => {
    if (cart.length === 0) {
      setDiscounted(false);
      return setTotal(0);
    }
    const prices = cart.map((food) => food.price * food.quantity);
    let total = prices.reduce((a, b) => a + b);
    if (discounted) total *= 0.85;
    setTotal(total.toFixed(2));
  }, [cart, discounted]);

  const value = {
    cart,
    setCart,
    discounted,
    total,
    setDiscounted,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default useCart;
