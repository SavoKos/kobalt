import Catalog from '../../components/Catalog';
import axios from '../../utils/axiosBackend';

function Category(props) {
  console.log(props);
  return <Catalog {...props} />;
}

export async function getStaticProps({ params }) {
  const fetched = await Promise.all([
    axios.get('/food/category'),
    axios.post(`/food/${params.category}`),
  ]);

  const data = fetched.map((arr) => arr.data.data);

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

  const categories = await axios.get('/food/category');

  const paths = categories.data.data.map((category) => ({
    params: { category: category.category },
  }));

  return { paths, fallback: false };
}

export default Category;
