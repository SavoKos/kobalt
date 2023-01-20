import React from 'react';
import Catalog from '../../components/Catalog';
import axios from '../../utils/axiosBackend';

function Index(props) {
  return <Catalog category='all' {...props} />;
}

export async function getStaticProps() {
  const fetched = await Promise.all([
    axios.get('/food/category'),
    axios.get(`/food`),
  ]);

  const data = fetched.map((arr) => arr.data.data);

  return {
    props: { food: data[1], categories: data[0] },
  };
}

export default Index;
