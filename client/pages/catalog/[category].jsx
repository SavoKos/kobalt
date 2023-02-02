import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import useFilters from '../../context/filters';
import url from '../../utils/url';

function Category() {
  const { setCategories } = useCategories();
  const { setFood } = useFilters();

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (!category) return;

    async function fetchData() {
      const res = await Promise.all([
        fetch(`${url}/food/category`),
        fetch(`${url}/food/${category}`, { method: 'POST' }),
      ]);
      const fetched = await Promise.all(res.map((r) => r.json()));

      const data = fetched.map((arr) => arr.data);
      setCategories(data[0]);
      setFood(data[1]);
    }
    fetchData();
  }, [category]);

  return <Catalog category={category} />;
}

export default Category;
