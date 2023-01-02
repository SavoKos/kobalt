import React from 'react';
import styled from 'styled-components';
import useDB from '../../context/db';
import Filters from './Filters';

function FoodList() {
  return (
    <S.Container>
      <Filters />
      <S.Main></S.Main>
    </S.Container>
  );
}

export default FoodList;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  grid-column: 1/3;

  @media screen and (min-width: 768px) {
    padding-right: 2rem;
    grid-column: 2/3;
  }
`;

S.Main = styled.div``;
