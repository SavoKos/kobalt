import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

function Ordered() {
  return (
    <S.Container>
      <Navigation link='/cart' />
      <S.Ordered>
        <h4>Your order is successfully submited!</h4>
        <Link href='/catalog'>
          <p>
            <BsCart2 /> Back to shopping
          </p>
        </Link>
      </S.Ordered>
    </S.Container>
  );
}

export default Ordered;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div``;
S.Ordered = styled.div`
  padding: 5rem 10%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  margin: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: center;

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
