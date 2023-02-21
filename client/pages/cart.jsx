import Link from 'next/link';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import styled from 'styled-components';
import CardDetails from '../components/Cart/CardDetails';
import CartItem from '../components/Cart/CartItem';
import Head from '../components/Head';
import Navigation from '../components/Navigation';
import ProtectedRoute from '../components/ProtectedRoute';
import Spinner from '../components/Spinner';
import useCart from '../context/cart';
import { TopNote } from '../Theme';

function Cart() {
  const { cart, setDiscounted, total, discounted } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeError, setPromoCodeError] = useState('');
  const [loading, setLoading] = useState(false);

  const applyPromoCode = () => {
    if (promoCode === 'savo') {
      setDiscounted(true);
      setPromoCodeError('');
    } else setPromoCodeError('Invalid promo code!');
  };

  return (
    <>
      <Head title='Cart' description='Food cart' link='/cart' />
      <ProtectedRoute>
        <S.Container>
          <TopNote>
            <p className='discount'>15% OFF WITH PROMO CODE</p>
          </TopNote>
          <Navigation homeIcon={true} catalogIcon={true} />
          {loading && (
            <S.Cart>
              <Spinner />
            </S.Cart>
          )}
          {!loading && (
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
                  <h5>
                    Total: ${total}
                    {discounted && ' with 15% discount!'}
                  </h5>
                  <S.PromoCode>
                    <input
                      type='text'
                      placeholder='Promo Code'
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={discounted}
                    />
                    <button onClick={applyPromoCode} disabled={discounted}>
                      Use
                    </button>
                    <p className='error'>{promoCodeError}</p>
                  </S.PromoCode>
                  <CardDetails setLoading={setLoading} />
                </>
              )}
            </S.Cart>
          )}
        </S.Container>
      </ProtectedRoute>
    </>
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
  padding: 5rem 5%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  span {
    font-weight: 400;
  }

  .error {
    color: red;
    margin-top: 0.5rem;
  }

  h5 {
    margin-top: 4rem;
    margin-bottom: 0.5rem;
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

S.PromoCode = styled.div`
  width: fit-content;
  input,
  button {
    outline: 0;
    border: 0;
    padding: 0.8rem 1.6rem;

    &:disabled {
      background-color: #cfcfcf;
    }
  }

  input {
    border-radius: 3rem 0 0 3rem;
    width: 100%;
    border: 1px solid #aeadb2;
  }

  button {
    border-radius: 0 3rem 3rem 0;
    border: 1px solid transparent;
    position: absolute;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    input,
    button {
      padding: 1rem 2rem;
    }

    input {
      min-width: 250px;
    }
  }
`;
