import React, { useState } from 'react';
import styled from 'styled-components';
import FoodItem from '../Home/FoodItem';
import Spinner from '../Spinner';
import Filters from './Filters';

function FoodList({ food, loading, setLoading }) {
  return (
    <S.Container>
      <S.Filters>
        <Filters />
      </S.Filters>
      <S.FoodItems>
        {loading && <Spinner />}
        {food?.length > 0 &&
          food?.map((food) => <FoodItem food={food} key={food._id} />)}
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
  margin: 5rem 0;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (min-width: 1024px) {
    margin: 15rem 0 10rem 0;
    column-gap: 2rem;
  }

  h5 {
    text-align: center;
  }
`;

S.Filters = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
