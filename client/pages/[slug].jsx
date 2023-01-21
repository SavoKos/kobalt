import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/SingleFood/Hero';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../components/Home/Footer';
import PopularCategory from '../components/Home/PopularCategory';
import styled from 'styled-components';
import url from '../utils/url';

function Food({ food, categories }) {
  return (
    <div>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
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
  const res = await Promise.all([
    fetch(`${url}/food/category`),
    fetch(`${url}/food/${params?.slug}`),
  ]);

  const fetched = await Promise.all(res.map((r) => r.json()));

  const data = fetched.map((arr) => arr.data);

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

  const res = await fetch(`${url}/food`);
  const foods = await res.json();

  const paths = foods.data.map((food) => ({
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
