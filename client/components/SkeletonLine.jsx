import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLine = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={30}
    viewBox='0 0 300 30'
    backgroundColor='#d6d6d6'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='50' y='9' rx='5' ry='5' width='220' height='20' />
  </ContentLoader>
);

export default SkeletonLine;
