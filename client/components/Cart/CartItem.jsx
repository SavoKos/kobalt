import Image from 'next/image';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';
import styled from 'styled-components';
import useCart from '../../context/cart';

function CartItem({ food }) {
  const { cart, setCart } = useCart();

  const changeQuantity = (food, operation) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((cart) => cart._id === food._id);
    if (operation === 'minus' && cartCopy[index].quantity < 2) return;

    if (operation === 'minus') cartCopy[index].quantity -= 1;
    if (operation === 'plus') cartCopy[index].quantity += 1;
    setCart(cartCopy);
  };

  const removeFood = (food) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((cart) => cart._id === food._id);
    if (index > -1) {
      // only splice array when item is found
      cartCopy.splice(index, 1); // 2nd parameter means remove one item only
    }
    setCart(cartCopy);
  };

  return (
    <S.CartItem>
      <S.Image>
        <Image src={food.image} width={100} height={100} alt={food.name} />
      </S.Image>
      <S.Text>
        <p className='tag'>Available</p>
        <p className='name'>{food.name}</p>
      </S.Text>
      <S.Quantity>
        <S.Icon onClick={() => changeQuantity(food, 'plus')}>
          <BiPlus />
        </S.Icon>
        <p>{food.quantity}</p>
        <S.Icon onClick={() => changeQuantity(food, 'minus')}>
          <BiMinus />
        </S.Icon>
      </S.Quantity>
      <p className='price'>${food.price}</p>
      <S.Icon className='remove' onClick={() => removeFood(food)}>
        <AiOutlineClose />
      </S.Icon>
    </S.CartItem>
  );
}

export default CartItem;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.CartItem = styled.div`
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
    width: 100%;
    gap: 1rem;
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
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: fit-content;
    height: 100%;
    width: 100%;
    max-height: 100px;
  }
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

S.Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
