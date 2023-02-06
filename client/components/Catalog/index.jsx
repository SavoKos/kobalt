import React, { useEffect } from 'react';
import styled from 'styled-components';
import Categories from '../../components/Catalog/Categories';
import Navigation from '../../components/Navigation';
import FoodList from '../../components/Catalog/FoodList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { TopNote } from '../../Theme';
import useFilters from '../../context/filters';
import searchByFilters from '../../utils/searchByFilters';

function Catalog({ category }) {
  const { stars, price, onlyAvailable, setFood, search } = useFilters();

  useEffect(() => {
    searchByFilters(category, stars, price, onlyAvailable, setFood, search);
  }, [stars, price, onlyAvailable, category, setFood, search]);

  return (
    <S.Container>
      <TopNote>
        <p className='discount'>15% OFF WITH PROMO CODE</p>
      </TopNote>
      <Navigation cartIcon={true} homeIcon={true} searchIcon={true} />
      <S.MainContent>
        <Categories />
        <FoodList />
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
