import React, { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import useFilters from '../../context/filters';
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

  return <Catalog category='all' />;
}

export default Index;
