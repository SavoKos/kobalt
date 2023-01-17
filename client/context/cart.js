import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(false);
  const [total, setTotal] = useState(0);
  console.log(total);

  useEffect(() => {
    if (cart.length === 0) {
      setDiscount(false);
      return setTotal(0);
    }
    const prices = cart.map((food) => food.price * food.quantity);
    let total = prices.reduce((a, b) => a + b);
    if (discount) total *= 0.85;
    setTotal(total.toFixed(2));
  }, [cart, discount]);

  const value = {
    cart,
    setCart,
    discount,
    total,
    setDiscount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default useCart;
