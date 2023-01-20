import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../utils/axiosBackend';
import FoodItem from '../Home/FoodItem';
import Skeleton from '../Skeleton';
import Accordions from './Accordions';
import Filters from './Filters';

function FoodList({ initialFood, category }) {
  const skeletons = new Array(8).fill(0);
  const [food, setFood] = useState(initialFood);
  const [stars, setStars] = useState([1, 5]);
  const [price, setPrice] = useState([1, 100]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  useEffect(() => {
    axios
      .post(`/food/${category}`, {
        minStars: stars[0],
        maxStars: stars[1],
        minPrice: price[0],
        maxPrice: price[1],
        onlyAvailable,
      })
      .then((res) => {
        setFood(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [stars, price, onlyAvailable, food]);

  return (
    <S.Container>
      <S.Filters>
        <Filters
          setOnlyAvailable={setOnlyAvailable}
          setPrice={setPrice}
          setStars={setStars}
        />
      </S.Filters>
      <Accordions />
      <S.FoodItems>
        {food?.length > 0 &&
          food?.map((food) => <FoodItem food={food} key={food._id} />)}
        {food?.length === 0 && skeletons.map((_, i) => <Skeleton key={i} />)}
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

S.Filters = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
