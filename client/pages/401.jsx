import React from 'react';
import Head from '../components/Head';
import Error from './error';

function Page401() {
  return (
    <>
      <Head
        title='401'
        description='Unauthorized Access. You are not an admin!'
        link='/401'
      />
      <Error code='401' message='Unauthorized Access. You are not an admin!' />
    </>
  );
}

export default Page401;
