import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import url from '../../utils/url';

function Category() {
  const { setCategories } = useCategories();
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (!category) return;

    async function fetchData() {
      const res = await fetch(`${url}/food/category`);
      const data = await res.json();

      setCategories(data.data);
    }
    fetchData();
  }, [category]);

  return (
    <>
      <Head>
        <title>Kobalt | Catalog</title>
        <meta
          name='description'
          content='Kobalt has variety of foods you can order right now!'
        />
      </Head>
      <Catalog category={category} />
    </>
  );
}

export default Category;
