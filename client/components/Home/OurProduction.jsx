import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDB from '../../context/db';
import { BtnMeni } from '../../Theme';
import FoodItem from './FoodItem';

function OurProduction() {
  const { categories, food } = useDB();
  const [selected, setSelected] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    setSelected(categories[0]?.category);
    console.log('SETSELECTED', categories[0]?.category);
  }, [categories]);

  useEffect(() => {
    console.log('SETFOOD', 'SELECTED=', selected);
    const foodFind = food
      ?.filter((food) => food.category === selected)
      .slice(0, 4);
    console.log(categories);
    setFoodItems(foodFind);
  }, [categories, food, selected]);

  return (
    <S.Container>
      <S.Header>
        <h4>
          Our <span>Production</span>
        </h4>
        <Link href='/catalog' scroll={true}>
          <BtnMeni>Catalog</BtnMeni>
        </Link>
        <S.Categories>
          {categories.map((category) => (
            <S.Category
              selected={selected === category.category}
              onClick={() => setSelected(category.category)}
              key={category.category}
            >
              {category.category}
            </S.Category>
          ))}
        </S.Categories>
      </S.Header>
      <S.FoodItems>
        {foodItems?.map((food) => (
          <FoodItem food={food} key={food._id} />
        ))}
      </S.FoodItems>
    </S.Container>
  );
}

export default OurProduction;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  background-color: #eceff4;
  border-radius: 2rem;
  padding: 5rem 5%;

  @media screen and (min-width: 768px) {
    padding: 10rem 10%;
    border-radius: 5rem;
  }
`;

S.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h4 {
    font-weight: 700;
    width: 50%;
  }
  span {
    font-weight: 400;
  }
`;

S.Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 100%;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

S.Category = styled.p`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.gray : '#fff'};
  border-radius: 10rem;
  color: ${({ selected, theme }) => (selected ? '#fff' : theme.colors.gray)};
  padding: 0.8rem 1.5rem;
  transition: all ease 0.3s;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray};
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

S.FoodItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
  row-gap: 8rem;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (min-width: 1024px) {
    column-gap: 2rem;
  }
`;
