import React from 'react';
import Head from '../components/Head';
import Error from './error';

function Page404() {
  return (
    <>
      <Head title='404' description='Page not found!' link='/404' />
      <Error code='404' />
    </>
  );
}

export default Page404;
