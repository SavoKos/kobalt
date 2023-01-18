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

function Hero({ food }) {
  const { setCart } = useCart();
  const starItems = Array(5)
    .fill(0)
    .map((_, i) =>
      i < +food.rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
    );

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, { ...food, quantity: 1 }]);
    toast.success(`${food.name} added to cart!`);
  };
  return (
    <S.Container>
      <S.Food>
        <Image src={food.image} fill className='foodImage' alt={food.name} />
        <S.Info>
          <h1>{food.name}</h1>
          <p className='tag'>
            {food.available ? 'AVAILABLE' : 'NOT AVAILABLE'}
          </p>
          <S.Stars>{starItems.map((item) => item)}</S.Stars>
          <p className='price'>${food.price}</p>
          <S.Cart onClick={addToCart}>
            <p>Add To Cart</p>
            <AiOutlineShoppingCart className='cart' />
          </S.Cart>
        </S.Info>
      </S.Food>
    </S.Container>
  );
}

export default Hero;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 0 0 5rem 5rem;
  position: relative;
  padding: 0 10%;
  display: flex;
  align-items: center;
  width: 100%;
`;

S.Food = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .foodImage {
    width: unset !important;
    max-height: 400px;
    position: relative !important;
  }
`;

S.Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .tag {
    color: #c3c3c3;
  }

  .price {
    font-size: 20px;
  }

  * {
    text-align: center;
  }
`;

S.Cart = styled.div`
  color: #fff;
  bottom: 0;
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
  padding: 0.8rem 1.5rem;
  border-radius: 10rem;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

S.Stars = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightOrange};

  svg {
    font-size: 24px;
  }
`;
