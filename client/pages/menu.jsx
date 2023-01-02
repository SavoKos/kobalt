import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import Categories from '../components/Menu/Categories';
import Header from '../components/Menu/Header';

function meni() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <S.Container>
      <S.TopNote>
        <p className='discount'>15% OFF WITH CODE: SAVO</p>
      </S.TopNote>
      <S.MainContent>
        <Link href='/'>
          <Image src='/logoGray.png' fill className='logo' />
        </Link>
        <Header setMenuActive={setMenuActive} />
        <Categories menuActive={menuActive} setMenuActive={setMenuActive} />
        <p>Main CONTET</p>
      </S.MainContent>
    </S.Container>
  );
}

export default meni;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div``;

S.TopNote = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  text-align: right;
  padding: 0.5rem 2rem;

  p {
    color: #fff;
    width: 100%;
  }

  .discount {
    text-align: center;
  }
`;

S.MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 4fr;

  .logo {
    cursor: pointer;
    max-width: 200px;
    max-height: 80px;
    width: 140px !important;
    height: fit-content !important;
    margin: 1rem 0 1rem 1rem;

    @media screen and (min-width: 768px) {
      width: auto !important;
      height: auto !important;
      margin: 1rem 0 1rem 2rem;
    }
    position: relative !important;
  }
`;
