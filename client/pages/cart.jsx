import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styled from 'styled-components';
import CardDetails from '../components/Cart/CardDetails';
import CartItem from '../components/Cart/CartItem';
import Navigation from '../components/Navigation';
import ProtectedRoute from '../components/ProtectedRoute';
import useCart from '../context/cart';
import { TopNote } from '../Theme';

function Cart() {
  const { cart } = useCart();
  console.log('CART', cart);

  return (
    <ProtectedRoute>
      <S.Container>
        <TopNote>
          <p className='discount'>15% OFF WITH CODE: SAVO</p>
        </TopNote>
        <Navigation link='/cart' />
        <S.Cart>
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

          {cart?.length > 0 && (
            <>
              <h2>
                Shopping <span>Cart</span>
              </h2>
              {cart?.map((food) => (
                <CartItem food={food} key={food._id} />
              ))}
              <CardDetails />
            </>
          )}
        </S.Cart>
      </S.Container>
    </ProtectedRoute>
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
