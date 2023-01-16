import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import useCart from '../context/cart';
import { TopNote } from '../Theme';

function Cart() {
  const { cart, setCart } = useCart();
  console.log('CART', cart);
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
    <S.Container>
      <TopNote>
        <p className='discount'>15% OFF WITH CODE: SAVO</p>
      </TopNote>
      <Navigation link='/cart' />
      <S.Cart>
        {cart?.length > 0 && (
          <h2>
            Shopping <span>Cart</span>
          </h2>
        )}
        {cart?.length === 0 && (
          <S.CartEmpty>
            <h4>Your cart is empty.</h4>
            <Link href='/catalog'>
              <p>
                <BsCart2 /> Back to shopping
              </p>
            </Link>
          </S.CartEmpty>
        )}
        {cart?.map((food) => (
          <S.CartItem key={food._id}>
            <S.Image>
              <Image src={food.image} width={100} height={100} />
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
        ))}
      </S.Cart>
    </S.Container>
  );
}

export default Cart;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  h2 {
    margin-bottom: 5rem;
  }
`;

S.Cart = styled.div`
  padding: 5rem 10%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  margin: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  span {
    font-weight: 400;
  }
`;

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

  .price {
    font-weight: 700;
  }

  .remove {
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

S.CartEmpty = styled.div`
  margin: auto;
  text-align: center;

  p {
    background-color: ${({ theme }) => theme.colors.lightGray};
    width: fit-content;
    text-align: center;
    margin: auto;
    padding: 1rem 2rem;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    color: #000;
  }
`;

S.Text = styled.div`
  justify-self: start;
  .name {
    font-weight: 700;
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
