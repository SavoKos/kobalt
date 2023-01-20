import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/SingleFood/Hero';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../components/Home/Footer';
import PopularCategory from '../components/Home/PopularCategory';
import styled from 'styled-components';
import axios from '../utils/axiosBackend';

function Food({ food, categories }) {
  return (
    <div>
      <Navigation />
      <Hero food={food} />
      <PopularCategory categories={categories} />
      <S.Footer>
        <Footer />
      </S.Footer>
      <ToastContainer position='bottom-left' />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const fetched = await Promise.all([
    axios.get('/food/category'),
    axios.get(`/food/${params?.slug}`),
  ]);

  const data = fetched.map((arr) => arr.data.data);

  return {
    props: { food: data[1], categories: data[0] },
  };
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const foods = await axios.get('/food');

  const paths = foods.data.data.map((food) => ({
    params: { slug: food.slug },
  }));

  return { paths, fallback: false };
}

export default Food;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Footer = styled.div`
  margin-top: 20rem;
`;
