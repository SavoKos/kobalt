import React, { useEffect } from 'react';
import styled from 'styled-components';
import Categories from '../../components/Catalog/Categories';
import Navigation from '../../components/Navigation';
import FoodList from '../../components/Catalog/FoodList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { TopNote } from '../../Theme';
import useFilters from '../../context/filters';
import axios from '../../utils/axiosBackend';

function Catalog({ category }) {
  const { stars, price, onlyAvailable, setFood } = useFilters();

  useEffect(() => {
    console.log('FETCH');
    axios
      .post(`/food/${category}`, {
        minStars: stars[0],
        maxStars: stars[1],
        minPrice: price[0],
        maxPrice: price[1],
        onlyAvailable,
      })
      .then((res) => {
        console.log('SET FOOOODDD');
        setFood(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [stars, price, onlyAvailable, category, setFood]);

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
