import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import styled from 'styled-components';
import Head from '../components/Head';
import Navigation from '../components/Navigation';

function Ordered() {
  return (
    <>
      <Head
        title='Ordered'
        description='Your food is ordered'
        link='/ordered'
      />
      <S.Container>
        <Navigation homeIcon={true} catalogIcon={true} />
        <S.Ordered>
          <h4>Your order is successfully submited!</h4>
          <h4>Your food will be prepared in 30 minutes. See you!</h4>
          <Link href='/catalog'>
            <p>
              <BsCart2 /> Back to shopping
            </p>
          </Link>
        </S.Ordered>
      </S.Container>
    </>
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
