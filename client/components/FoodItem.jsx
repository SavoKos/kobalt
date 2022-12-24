import Image from 'next/image';
import React, { startTransition } from 'react';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';
import styled from 'styled-components';

function FoodItem({ stars = 4 }) {
  const starItems = Array(5)
    .fill(0)
    .map((_, i) =>
      i < stars ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
    );
  return (
    <S.Container>
      <Image src='/foodItem.png' width={300} height={300} />
      <Image src='/burgeri.png' width={200} height={200} className='foodImg' />
      <S.Text>
        <p className='title'>Hamburger</p>
        <p className='tag'>DOSTUPNO</p>
        <S.Stars>{starItems.map((item) => item)}</S.Stars>
        <p className='price'>$10.99</p>
      </S.Text>
      <S.Cart>
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
