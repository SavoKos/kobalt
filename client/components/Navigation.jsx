import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Icon from './UI/Icon';
import { faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Navigation({ active = 'pocetna' }) {
  const style = (page) => ({
    fontWeight: active === page ? '700' : '500',
  });

  return (
    <S.Container>
      <Image src='/logo.png' width={200} height={80} />
      <S.NavLinks>
        <Link href='/' style={style('pocetna')}>
          Početna
        </Link>
        <Link href='/onama' style={style('onama')}>
          O nama
        </Link>
        <Link href='/meni' style={style('meni')}>
          Meni
        </Link>
        <Link href='/kontakt' style={style('kontakt')}>
          Kontakt
        </Link>
      </S.NavLinks>
      <S.RightSide>
        <Icon icon={faShoppingCart} className='cart' />
        <Icon icon={faPhone} className='phone' />
        <p>065 583 865</p>
      </S.RightSide>
    </S.Container>
  );
}

export default Navigation;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkYellow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0.5rem 2rem;
  position: absolute;
  width: 100%;

  img {
    cursor: pointer;
  }
`;

S.NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  a {
    color: #fff;
    font-size: 1em;
    text-transform: uppercase;
  }
`;
S.RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    font-size: 20px;
    cursor: pointer;
  }

  .cart {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.darkYellow};
    padding: 1rem;
    border-radius: 100%;
  }

  .phone {
    margin-right: -1.5rem;
  }
`;
