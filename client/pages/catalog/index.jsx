import React, { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import useFilters from '../../context/filters';
import url from '../../utils/url';

function Index({ categories, food }) {
  const { setCategories } = useCategories();
  const { setFood } = useFilters();

  useEffect(() => {
    setCategories(categories);
    setFood(food);
  }, []);

  return <Catalog category='all' />;
}

export async function getStaticProps() {
  console.log('GET STARIC PROPS');
  const res = await Promise.all([
    fetch(`${url}/food/category`),
    fetch(`${url}/food/all`, { method: 'POST' }),
  ]);
  const fetched = await Promise.all(res.map((r) => r.json()));

  const data = fetched.map((arr) => arr.data);

  return {
    props: { food: data[1], categories: data[0] },
  };
}

export default Index;
