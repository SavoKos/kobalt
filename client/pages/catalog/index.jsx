import React, { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import useFilters from '../../context/filters';
import url from '../../utils/url';

function Index() {
  const { setCategories } = useCategories();
  const { setFood } = useFilters();

  useEffect(() => {
    async function fetchData() {
      const res = await Promise.all([
        fetch(`${url}/food/category`),
        fetch(`${url}/food/all`, { method: 'POST' }),
      ]);
      const fetched = await Promise.all(res.map((r) => r.json()));

      const data = fetched.map((arr) => arr.data);
      setCategories(data[0]);
      setFood(data[1]);
    }
    fetchData();
  }, []);

  return <Catalog category='all' />;
}

export default Index;
