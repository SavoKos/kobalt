import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Menu/Header';

function meni() {
  return (
    <S.Container>
      <S.TopNote>
        <p></p>
        <p className='discount'>15% OFF WITH CODE: SAVO</p>
        <p className='workingHours'>WORKING HOURS 8:00 - 23:00</p>
      </S.TopNote>
      <S.MainContent>
        <Image src='/logoGray.png' width={200} height={80} className='logo' />
        <Header />
        <p>Menu</p>
        <p>Main</p>
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
    margin: 1rem 0 1rem 2rem;
  }
`;
