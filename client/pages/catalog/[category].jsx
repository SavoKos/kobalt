import { useEffect } from 'react';
import Catalog from '../../components/Catalog';
import useCategories from '../../context/categories';
import useFilters from '../../context/filters';
import url from '../../utils/url';

function Category({ food, categories, category }) {
  const { setCategories } = useCategories();
  const { setFood } = useFilters();

  useEffect(() => {
    setCategories(categories);
    setFood(food);
  }, []);

  return <Catalog category={category} />;
}

export async function getStaticProps({ params }) {
  const res = await Promise.all([
    fetch(`${url}/food/category`),
    fetch(`${url}/food/${params.category}`, { method: 'POST' }),
  ]);

  const fetched = await Promise.all(res.map((r) => r.json()));

  const data = fetched.map((arr) => arr.data);

  return {
    props: { category: params.category, food: data[1], categories: data[0] },
  };
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const res = await fetch(`${url}/food/category`);
  const categories = await res.json();

  const paths = categories.data.map((category) => ({
    params: { category: category.category },
  }));

  return { paths, fallback: false };
}

export default Category;
