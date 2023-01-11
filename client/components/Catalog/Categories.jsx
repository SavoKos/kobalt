import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import useDB from '../../context/db';
import Filters from './Filters';

function Categories({ menuActive, setMenuActive }) {
  const { categories } = useDB();
  const router = useRouter();
  console.log(router);

  return (
    <S.Container>
      <h5>Catalog</h5>
      <S.Categories menuActive={menuActive}>
        <AiOutlineClose
          className='close'
          onClick={() => setMenuActive(false)}
        />
        <Link href={`/catalog`}>
          <S.Category selected={router.pathname === '/catalog'}>All</S.Category>
        </Link>
        {categories.map((category) => (
          <Link href={`/catalog/${category.category}`} key={category._id}>
            <S.Category selected={category.category === router.query.category}>
              {category.category}
            </S.Category>
          </Link>
        ))}
      </S.Categories>
    </S.Container>
  );
}

export default Categories;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  position: absolute;
  padding: 3rem 0;
  min-height: 100vh;

  h5 {
    display: none;
    padding: 0rem 3rem 1rem 3rem;
  }

  @media screen and (min-width: 768px) {
    position: static;

    h5 {
      display: block;
    }
  }
`;

S.Category = styled.p`
  text-transform: uppercase;
  padding: 1rem 3rem;
  border-radius: 0 5rem 5rem 0;
  cursor: pointer;
  width: 100%;
  color: ${({ selected, theme }) => (selected ? '#fff' : theme.colors.gray)};

  @media screen and (min-width: 768px) {
    width: 90%;
    color: ${({ selected, theme }) => (selected ? '#fff' : theme.colors.gray)};

    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.darkOrange : 'transparent'};
  }
`;

S.Categories = styled.div`
  display: flex;
  gap: 2rem;
  position: fixed;
  flex-direction: column;
  right: 0;
  transform: translateX(${(props) => (props.menuActive ? '0' : '120%')});
  top: 0;
  height: 100vh;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.lightOrange + 'eb'};
  width: 100%;
  z-index: 5;
  transition: all ease 0.5s;

  p {
    font-size: 1em;
    text-transform: uppercase;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }

  @media screen and (min-width: 768px) {
    position: static;
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
