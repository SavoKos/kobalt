import Image from 'next/image';
import React from 'react';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';
import styled from 'styled-components';
import useCart from '../../context/cart';
import { toast } from 'react-toastify';

function FoodItem({ food }) {
  const { cart, setCart } = useCart();

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, food]);
    toast.success(`${food.name} added to cart!`);
  };

  const starItems = Array(5)
    .fill(0)
    .map((_, i) =>
      i < +food.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
    );
  return (
    <S.Container>
      <Image src='/foodItem.png' width={300} height={300} alt='foodItem' />
      <Image
        src={food.image}
        width={200}
        height={200}
        className='foodImg'
        alt={food.name}
      />
      <S.Text>
        <p className='title'>{food.name}</p>
        <p className='tag'>{food.available ? 'AVAILABLE' : 'NOT AVAILABLE'}</p>
        <S.Stars>{starItems.map((item) => item)}</S.Stars>
        <p className='price'>${food.price}</p>
      </S.Text>
      <S.Cart onClick={addToCart}>
        <AiOutlineShoppingCart className='cart' />
      </S.Cart>
    </S.Container>
  );
}

export default FoodItem;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: relative;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));

  .foodImg {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    max-width: fit-content;
    height: 100%;
    width: 100%;
    max-height: 200px;
  }
`;

S.Text = styled.div`
  position: absolute;
  top: 78%;
  left: 56%;
  transform: translate(-56%, -78%);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  p {
    font-weight: 700;
    text-align: center;
  }

  .tag {
    font-size: 12px;
    color: #c3c3c3;
  }
`;

S.Cart = styled.div`
  position: absolute;
  bottom: -20px;
  left: 56%;
  transform: translateX(-56%);
  color: #fff;
  background: #f46b45; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0.8rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

S.Stars = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightOrange};
`;
