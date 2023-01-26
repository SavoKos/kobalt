import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discounted, setDiscounted] = useState(false);
  const [total, setTotal] = useState(0);

  console.log('CART CONTEXT');

  const addToCart = (food) => {
    if (!food.available) return;
    if (cart.find((item) => item.slug === food.slug)) {
      const copy = [...cart];
      const index = copy.findIndex((item) => item.slug === food.slug);
      copy[index].quantity++;
      toast.success(`${food.name} added to cart!`);
      return setCart(copy);
    }

    setCart((prevCart) => [...prevCart, { ...food, quantity: 1 }]);
    toast.success(`${food.name} added to cart!`);
  };

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
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default useCart;
