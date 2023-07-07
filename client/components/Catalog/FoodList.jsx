import React from 'react';
import styled from 'styled-components';
import useFilters from '../../context/filters';
import FoodItem from '../Home/FoodItem';
import Skeleton from '../Skeletons/Skeleton';

function FoodList() {
  const skeletons = new Array(8).fill(0);
  const { food } = useFilters();

  return (
    <S.Container>
      <S.FoodItems>
        {food?.length > 0 &&
          food[0].name &&
          food?.map((food) => <FoodItem food={food} key={food._id} />)}
        {food?.length === 0 && skeletons.map((_, i) => <Skeleton key={i} />)}
        {food?.length > 0 && !food[0].name && (
          <h4>We could not find any food. Try another filters</h4>
        )}
      </S.FoodItems>
    </S.Container>
  );
}

export default FoodList;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  grid-column: 1/3;
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 768px) {
    grid-column: 2/3;
  }
`;

S.FoodItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 5rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 3rem;
    padding: 0 2rem;
  }

  h4 {
    text-align: center;
  }
`;

S.Filters = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
