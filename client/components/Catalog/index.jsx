import React from 'react';
import styled from 'styled-components';
import Categories from '../../components/Catalog/Categories';
import Navigation from '../../components/Navigation';
import FoodList from '../../components/Catalog/FoodList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { TopNote } from '../../Theme';

function Catalog({ category, food, categories }) {
  console.log(food);
  return (
    <S.Container>
      <TopNote>
        <p className='discount'>15% OFF WITH PROMO CODE</p>
      </TopNote>
      <Navigation cartIcon={true} homeIcon={true} searchIcon={true} />
      <S.MainContent>
        <Categories categories={categories} />
        <FoodList initialFood={food} category={category} />
      </S.MainContent>
      <ToastContainer position='bottom-left' />
    </S.Container>
  );
}

export default Catalog;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  min-height: 100vh;
`;

S.MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr max-content;
  padding: 0 5%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
