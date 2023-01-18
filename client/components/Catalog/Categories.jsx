import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import useDB from '../../context/db';
import SkeletonLine from '../SkeletonLine';

function Categories({ closeAccordion }) {
  const { categories } = useDB();
  const router = useRouter();
  let skeletons = new Array(5).fill(0);

  return (
    <S.Container className='categories'>
      <h5>Catalog</h5>
      <S.Categories>
        {categories.length === 0 &&
          skeletons.map((_, i) => <SkeletonLine key={i} />)}

        {categories.length > 0 && (
          <Link href={`/catalog`} onClick={closeAccordion}>
            <S.Category selected={router.pathname === '/catalog'}>
              All
            </S.Category>
          </Link>
        )}

        {categories?.map((category) => (
          <Link
            href={`/catalog/${category.category}`}
            key={category._id}
            onClick={closeAccordion}
          >
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
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  padding: 3rem 0;
  display: none;

  h5 {
    display: none;
    padding: 0rem 3rem 1rem 3rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    min-height: 100vh;
    min-width: 250px;

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
  color: ${({ selected, theme }) =>
    selected ? theme.colors.darkOrange : theme.colors.gray};

  @media screen and (min-width: 768px) {
    width: 90%;
    color: ${({ selected, theme }) => (selected ? '#fff' : theme.colors.gray)};

    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.darkOrange : 'transparent'};
  }
`;

S.Categories = styled.div`
  gap: 2rem;
  flex-direction: column;
  right: 0;
  top: 0;
  justify-content: space-evenly;
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
    display: flex;
    height: 100vh;
    transform: translateX(0%) !important;
    width: unset;
    height: unset;
    background-color: transparent;
  }
`;
