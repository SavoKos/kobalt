import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Categories from '../../components/Catalog/Categories';
import Navigation from '../../components/Navigation';
import FoodList from '../../components/Catalog/FoodList';
import axios from '../../utils/axiosBackend';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import useFilter from '../../context/filter';
import { TopNote } from '../../Theme';

function Catalog() {
  const [menuActive, setMenuActive] = useState(false);
  const [food, setFood] = useState(null);
  const { stars, price, onlyAvailable, resetFilters } = useFilter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    resetFilters();
  }, []);

  useEffect(() => {
    console.log('FETCH MENU');
    setLoading(true);
    setFood(null);
    axios
      .post(`/food/all`, {
        minStars: stars[0],
        maxStars: stars[1],
        minPrice: price[0],
        maxPrice: price[1],
        onlyAvailable,
      })
      .then((res) => {
        setFood(res.data.data);
        setLoading(false);
      });
  }, [stars, price, onlyAvailable]);

  return (
    <S.Container>
      <TopNote>
        <p className='discount'>15% OFF WITH PROMO CODE</p>
      </TopNote>
      <S.MainContent>
        <Navigation link='/catalog' />
        <Categories menuActive={menuActive} setMenuActive={setMenuActive} />
        <FoodList food={food} loading={loading} />
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

  .logo {
    cursor: pointer;
    max-width: 200px;
    max-height: 80px;
    width: 140px !important;
    height: fit-content !important;
    margin: 1rem 0 1rem 0rem;

    @media screen and (min-width: 768px) {
      width: auto !important;
      height: auto !important;
      margin: 1rem 2rem 1rem 2rem;
    }
    position: relative !important;
  }
`;
