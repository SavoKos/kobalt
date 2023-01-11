import React from 'react';
import styled from 'styled-components';
import FoodItem from '../Home/FoodItem';
import Spinner from '../Spinner';
import Filters from './Filters';

function FoodList({ food, loading }) {
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
  margin: 5rem 0;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (min-width: 768px) {
    margin: 10rem 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 15rem 0 10rem 0;
    column-gap: 3rem;
    padding: 0 2rem;
  }

  h5 {
    text-align: center;
  }
`;

S.Filters = styled.div``;
