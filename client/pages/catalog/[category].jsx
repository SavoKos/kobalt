import { useRouter } from 'next/router';
import Catalog from '../../components/Catalog';

function Category() {
  const router = useRouter();
  const category = router.query.category;

  return <Catalog category={category} />;
}

export default Category;
