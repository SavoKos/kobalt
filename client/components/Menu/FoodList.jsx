import React from 'react';
import styled from 'styled-components';
import FoodItem from '../Home/FoodItem';
import Filters from './Filters';

function FoodList({ food }) {
  return (
    <S.Container>
      <Filters />
      <S.FoodItems>
        {food?.map((food) => (
          <FoodItem food={food} key={food._id} />
        ))}
      </S.FoodItems>
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

S.FoodItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 8rem 0;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (min-width: 1024px) {
    column-gap: 2rem;
  }
`;
