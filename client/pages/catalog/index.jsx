import React, { useEffect } from 'react';
import Catalog from '../../components/Catalog';
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
    <Catalog category='all'>
      <Head>
        <title>Kobalt | Catalog</title>
        <meta
          name='description'
          content='Kobalt has variety of foods you can order right now!'
        />
        <link href='https://kobalt.savokos.com/catalog' rel='canonical' />
      </Head>
    </Catalog>
  );
}

export default Index;
