import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonLine = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={30}
    viewBox='0 0 200 30'
    backgroundColor='#d6d6d6'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='50' y='9' rx='5' ry='5' width='150' height='20' />
  </ContentLoader>
);

export default SkeletonLine;
