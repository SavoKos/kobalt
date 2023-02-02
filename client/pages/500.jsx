import React from 'react';
import Error from './error';

function Page500() {
  return <Error code='500' message='Something went wrong!' />;
}

export default Page500;
