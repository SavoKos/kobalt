import React from 'react';
import Error from './error';

function Page401() {
  return (
    <Error code='401' message='Unauthorized Access. You are not an admin!' />
  );
}

export default Page401;
