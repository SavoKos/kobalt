import React, { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import Head from '../../components/Head';
import useCategories from '../../context/categories';
import url from '../../utils/url';

function Index() {
  const { setCategories } = useCategories();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${url}/food/category`);
      const data = await res.json();

      setCategories(data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Head
        title='Catalog'
        description='Kobalt has variety of foods you can order right now!'
        link='/catalog'
      />
      <Catalog category='all' />
    </>
  );
}

export default Index;
