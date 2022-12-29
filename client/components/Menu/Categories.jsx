import React, { useState } from 'react';
import styled from 'styled-components';
import useDB from '../../context/db';

function Categories() {
  const { categories } = useDB();
  const [selected, setSelected] = useState(categories[0]?.category);
  console.log(selected);
  return (
    <S.Container>
      <h5>MENU</h5>
      {categories.map((category) => (
        <S.Category
          selected={category.category === selected}
          onClick={() => setSelected(category.category)}
        >
          {category.category}
        </S.Category>
      ))}
    </S.Container>
  );
}

export default Categories;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  color: #fff;
  height: 100%;
  border-radius: 0 5rem 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  h5 {
    padding: 3rem 3rem 1rem 3rem;
  }
`;

S.Category = styled.p`
  text-transform: uppercase;
  padding: 1rem 3rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.lightOrange : 'transparent'};
  border-radius: 0 5rem 5rem 0;
  cursor: pointer;
  width: 90%;
  color: ${({ selected, theme }) => (selected ? theme.colors.gray : '#fff')};
  font-weight: 500;
`;
