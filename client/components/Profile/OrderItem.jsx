import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function OrderItem({ order, food }) {
  console.log(order);
  return (
    <S.Container className='orderItem'>
      <S.Image>
        <Image src={food.image} alt={food.name} width={100} height={100} />
      </S.Image>
      <S.Text>
        <p className='tag'>Available</p>
        <p className='name'>{food.name}</p>
      </S.Text>
      <S.Quantity>
        <p>x{food.quantity}</p>
      </S.Quantity>
      <p className='price'>${food.price}</p>
    </S.Container>
  );
}

export default OrderItem;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  max-width: 1300px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    text-align: center;
  }

  .price {
    font-weight: 700;
  }
`;

S.Image = styled.div`
  background-color: #fff;
  border-radius: 1.2rem;
  justify-self: start;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: fit-content;
    height: 100%;
    width: 100%;
    max-height: 100px;
    margin: auto;
  }
`;

S.Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

S.Text = styled.div`
  justify-self: start;
  .name {
    font-weight: 700;
  }

  .tag {
    font-size: 12px;
    color: #959595;
    text-transform: uppercase;
  }
`;
