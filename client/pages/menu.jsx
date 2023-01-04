import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Categories from '../components/Menu/Categories';
import Header from '../components/Menu/Header';
import FoodList from '../components/Menu/FoodList';
import axios from '../utils/axiosBackend';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import useFilter from '../context/filter';
import Spinner from '../components/Spinner';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('burger');
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
      .post(`/food/${selectedCategory}`, {
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
  }, [selectedCategory, stars, price, onlyAvailable]);

  return (
    <S.Container>
      <S.TopNote>
        <p className='discount'>15% OFF WITH CODE: SAVO</p>
      </S.TopNote>
      <S.MainContent>
        <Link href='/'>
          <Image src='/logoGray.png' fill className='logo' alt='logo' />
        </Link>
        <Header setMenuActive={setMenuActive} />
        <Categories
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FoodList food={food} loading={loading} setLoading={setLoading} />
      </S.MainContent>
      <ToastContainer position='bottom-left' />
    </S.Container>
  );
}

export default Menu;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  min-height: 100vh;
`;

S.TopNote = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  text-align: right;
  padding: 0.5rem 2rem;

  p {
    color: #fff;
    width: 100%;
  }

  .discount {
    text-align: center;
  }
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
