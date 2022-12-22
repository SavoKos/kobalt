import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

function Navigation({ active = 'pocetna' }) {
  const [menuActive, setMenuActive] = useState(false);

  const style = (page) => ({
    fontWeight: active === page ? '700' : '500',
  });

  return (
    <S.Container>
      <Image src='/logo.png' width={200} height={80} />
      <S.NavLinks menuActive={menuActive}>
        <AiOutlineClose
          className='close'
          onClick={() => setMenuActive(false)}
        />
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
      <S.Icons>
        <AiOutlineShoppingCart className='cart' />
        <AiOutlineMenu
          className='menu'
          onClick={() => setMenuActive((prevActive) => !prevActive)}
        />
      </S.Icons>
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
  gap: 2rem;
  align-items: center;
  position: fixed;
  flex-direction: column;
  right: 0;
  transform: translateX(${(props) => (props.menuActive ? '0' : '120%')});
  top: 0;
  height: 100vh;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.darkYellow + 'eb'};
  width: 100%;
  z-index: 5;
  transition: all ease 0.5s;

  a {
    color: #fff;
    font-size: 1em;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    position: static;
    flex-direction: row;
    transform: translateX(0%) !important;
    width: unset;
    height: unset;
    background-color: transparent;
  }

  .close {
    position: absolute;
    left: 2rem;
    top: 2rem;
    font-size: 36px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  min-width: 100px;
  justify-content: flex-end;

  svg {
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    position: relative;
  }

  .menu {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
