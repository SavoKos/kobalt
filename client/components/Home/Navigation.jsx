import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import useCart from '../../context/cart';

function Navigation({ active = 'pocetna' }) {
  const [menuActive, setMenuActive] = useState(false);
  const { cart } = useCart();

  const style = (page) => ({
    fontWeight: active === page ? '700' : '500',
  });

  return (
    <S.Container>
      <Image src='/logo.png' width={200} height={80} alt='logo' />
      <S.NavLinks menuActive={menuActive}>
        <AiOutlineClose
          className='close'
          onClick={() => setMenuActive(false)}
        />
        <Link href='/' style={style('home')}>
          Home
        </Link>
        <Link href='/about' style={style('about')}>
          About
        </Link>
        <Link href='/menu' style={style('menu')}>
          Menu
        </Link>
        <Link href='/contact' style={style('contact')}>
          Contact
        </Link>
      </S.NavLinks>
      <S.Icons>
        <Link href='/cart'>
          <p className='count'>{cart?.length}</p>
          <AiOutlineShoppingCart className='cart' />
        </Link>
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
  background-color: ${({ theme }) => theme.colors.darkOrange + 'eb'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0.5rem 5%;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 10%;
  }

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
  background-color: ${({ theme }) => theme.colors.darkOrange + 'eb'};
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
  position: relative;

  .count {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    right: -0.7rem;
    top: -0.7rem;
    min-width: 25px;
    min-height: 25px;
    font-size: 14px;
    border-radius: 50%;
    padding: 0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  svg {
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    position: relative;
  }

  .menu {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;