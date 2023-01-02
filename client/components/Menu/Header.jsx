import Link from 'next/link';
import React from 'react';
import {
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import useCart from '../../context/cart';

function Header({ setMenuActive }) {
  const { cart } = useCart();

  console.log(cart);

  return (
    <S.Container>
      <S.Search>
        <input type='text' placeholder='Search' />
        <S.SearchIcon>
          <BsSearch className='icon' />
        </S.SearchIcon>
      </S.Search>
      <S.Right>
        <S.Icon>
          <BsSearch className='search' />
        </S.Icon>
        <S.Icon>
          <Link href='/cart'>
            <AiOutlineShoppingCart className='cart' />
            <p className='count'>{cart?.length}</p>
          </Link>
        </S.Icon>
        <S.Icon>
          <AiOutlineLogin />
        </S.Icon>
        <S.Icon>
          <AiOutlineMenu
            className='menu'
            onClick={() => setMenuActive((prevActive) => !prevActive)}
          />
        </S.Icon>
      </S.Right>
    </S.Container>
  );
}

export default Header;
// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

S.Search = styled.div`
  position: relative;
  width: 50%;
  width: -webkit-fill-available;

  input {
    outline: 0;
    border: 1px solid #aeadb2;
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 10rem;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

S.SearchIcon = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkOrange};
    display: flex;
  }

  border-radius: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  cursor: pointer;
`;

S.Icon = styled.div`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0.5rem;
  font-size: 26px;

  a {
    color: ${({ theme }) => theme.colors.gray};
    position: relative;
  }

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
`;

S.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .search,
  .menu {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

S.Auth = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10rem 0 0 10rem;
  padding: 0.8rem 2rem;
  gap: 1rem;
  color: #fff;

  .user {
    font-size: 30px;
    cursor: pointer;
  }

  p {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    border-radius: 10rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;
