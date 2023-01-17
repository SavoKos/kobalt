import React from 'react';
import styled from 'styled-components';

function CardDetails() {
  const checkoutHandler = (e) => {
    e.preventDefault();
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
            <input type='text' placeholder='First Name' required />
            <input type='text' placeholder='Last Name' required />
          </S.Name>
          <S.CardNumber>
            <p>Card Number</p>
            <input
              type='text'
              placeholder='2232 2415 1251 5252'
              pattern='[0-9]{13,16}'
              required
            />
          </S.CardNumber>
          <S.Date>
            <p>Date</p>
            <input type='text' placeholder='MM' min={1} max={12} required />
            <input
              type='text'
              placeholder='YYYY'
              min={2000}
              max={new Date().getFullYear()}
              required
            />
          </S.Date>
          <S.Code>
            <p>Code</p>
            <input type='text' placeholder='XXX' required />
          </S.Code>
          <button>CHECK OUT</button>
        </form>
      </S.Card>
    </S.Container>
  );
}

export default CardDetails;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin: 5rem 0;
  max-width: 1000px;
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
  }
`;

S.Name = styled.div``;
S.CardNumber = styled.div``;
S.Date = styled.div``;
S.Code = styled.div``;
