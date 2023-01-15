import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import styled from 'styled-components';
import useCart from '../context/cart';

function Navigation({ link }) {
  const { cart } = useCart();

  return (
    <S.Container>
      <Link href='/'>
        <Image src='/logoGray.png' fill className='logo' alt='logo' />
      </Link>
      <S.MainContent>
        <S.Right>
          {link === '/' && (
            <S.Search>
              <input type='text' placeholder='Search' />
              <S.SearchIcon>
                <BsSearch className='icon' />
              </S.SearchIcon>
            </S.Search>
          )}
          <S.Links>
            {link === '/' ? (
              <Link href='/'>
                <S.Icon>
                  <AiOutlineHome />
                </S.Icon>
              </Link>
            ) : (
              <Link href='/catalog'>
                <S.Icon>
                  <MdOutlineRestaurantMenu />
                </S.Icon>
              </Link>
            )}
            {link === '/' && (
              <S.Icon className='search'>
                <BsSearch />
              </S.Icon>
            )}

            <S.Icon>
              <Link href='/cart'>
                <BsCart2 className='cart' />
                <p className='count'>{cart?.length}</p>
              </Link>
            </S.Icon>
            <S.Icon>
              <AiOutlineLogin />
            </S.Icon>
          </S.Links>
        </S.Right>
      </S.MainContent>
    </S.Container>
  );
}

export default Navigation;
// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  grid-column: 1/3;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;

  input {
    flex: 1;
  }

  .logo {
    cursor: pointer;
    max-width: 200px;
    max-height: 80px;
    width: 140px !important;
    height: fit-content !important;
    position: relative !important;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: auto !important;
      height: auto !important;
    }

    padding: 1rem 10%;
  }
`;

S.MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  grid-column: 2/5;
  width: 100%;
`;

S.Search = styled.div`
  position: relative;
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
    background-color: ${({ theme }) => theme.colors.lightOrange};
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
    background-color: ${({ theme }) => theme.colors.darkOrange};
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

S.Links = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;

  @media screen and (min-width: 768px) {
    gap: 0.5rem;
    margin-left: auto;

    .search,
    .menu {
      display: none;
    }
  }
`;

S.Logo = styled.div``;
S.Right = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
