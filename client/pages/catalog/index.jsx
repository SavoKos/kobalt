import React from 'react';
import Catalog from '../../components/Catalog';
import url from '../../utils/url';

function Index(props) {
  return <Catalog category='all' {...props} />;
}

export async function getStaticProps() {
  const res = await Promise.all([
    fetch(`${url}/food/category`),
    fetch(`${url}/food`),
  ]);
  const fetched = await Promise.all(res.map((r) => r.json()));

  const data = fetched.map((arr) => arr.data);

  return {
    props: { food: data[1], categories: data[0] },
  };
}

export default Index;
