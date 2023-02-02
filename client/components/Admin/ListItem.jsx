import Image from 'next/image';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

function ListItem(food = {}) {
  return (
    <S.Container className='orderItem'>
      <S.Text>
        <p className='name'>Name</p>
      </S.Text>

      <S.Icon className='remove' onClick={() => removeFood(food)}>
        <AiOutlineClose />
      </S.Icon>
    </S.Container>
  );
}

export default ListItem;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    text-align: center;
  }

  .price {
    font-weight: 700;
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

S.Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 100%;
  padding: 0.5rem;
  font-size: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  transition: all ease 0.3s;
  width: fit-content;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &.remove {
    color: red;

    &:hover {
      color: #fff;
      background-color: red;
    }
  }
`;

S.Title = styled.div``;
