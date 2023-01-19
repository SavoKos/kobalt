import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import axios from '../../utils/axiosBackend';
import useCart from '../../context/cart';
import useUser from '../../context/user';
import { useRouter } from 'next/router';

function CardDetails({ setLoading }) {
  const { cart, total, discounted, setCart } = useCart();
  const { user } = useUser();
  const router = useRouter();

  const [error, setError] = useState('');
  const [cardData, setCardData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '374245455400126',
    year: '',
    month: '',
    code: '',
  });

  const updateValue = (e) =>
    setCardData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const checkoutHandler = (e) => {
    e.preventDefault();
    if (+cardData.month < 1 || +cardData.month > 12)
      return setError('Month is invalid');

    if (+cardData.month > new Date().getFullYear())
      return setError('Year is invalid');

    if (!validator.isCreditCard(cardData.cardNumber))
      return setError('Card Number is invalid');

    setLoading(true);
    axios
      .post('/order', { user, food: cart, total, discounted })
      .then((res) => {
        setCart([]);
        router.push('/ordered');
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };
  return (
    <S.Container>
      <h2>
        Cart <span>Details</span>
      </h2>
      <S.Card>
        <form onSubmit={checkoutHandler}>
          <S.Name>
            <p>Name and surname</p>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              required
              onChange={updateValue}
            />
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              required
              onChange={updateValue}
            />
          </S.Name>
          <S.CardNumber>
            <p>Card Number</p>
            <input
              type='text'
              placeholder='2232 2415 1251 5252'
              pattern='[0-9]{13,16}'
              name='cardNumber'
              required
              defaultValue='374245455400126'
              onChange={updateValue}
            />
          </S.CardNumber>
          <S.Date>
            <p>Date</p>
            <input
              type='text'
              placeholder='MM'
              min={1}
              max={12}
              required
              onChange={updateValue}
              name='month'
            />
            <input
              type='text'
              placeholder='YYYY'
              min={2000}
              max={new Date().getFullYear()}
              name='year'
              required
              onChange={updateValue}
            />
          </S.Date>
          <S.Code>
            <p>Code</p>
            <input
              type='text'
              placeholder='XXX'
              required
              name='code'
              onChange={updateValue}
            />
          </S.Code>
          <button>CHECK OUT</button>
        </form>
      </S.Card>
      <p className='error'>{error}</p>
    </S.Container>
  );
}

export default CardDetails;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin: 5rem 0;
  max-width: 1000px;

  .error {
    color: red;
  }
`;

S.Card = styled.div`
  background-color: #89baff;
  border-radius: 3rem;
  padding: 2rem;

  div {
    display: flex;
    position: relative;
    gap: 1rem;
    margin: 3rem 0;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  div:first-of-type {
    margin: 1.5rem 0;
  }

  p {
    position: absolute;
    color: #fff;
    top: -25px;
    left: 10px;
  }

  input {
    background-color: #9ac4ff;
    outline: 0;
    border: 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  button {
    height: fit-content;
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: 0;
    border: 0;
    background-color: ${({ theme }) => theme.colors.gray};
    color: #fff;
    flex: none;
    width: 100%;
    cursor: pointer;
  }
`;

S.Name = styled.div``;
S.CardNumber = styled.div``;
S.Date = styled.div``;
S.Code = styled.div``;
