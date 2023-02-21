import React from 'react';
import Head from '../components/Head';
import Error from './error';

function Page500() {
  return (
    <>
      <Head title='500' description='Something went wrong!' link='/500' />
      <Error code='500' message='Something went wrong!' />
    </>
  );
}

export default Page500;
