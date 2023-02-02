import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const SkeletonOrder = (props) => (
  <S.Container>
    <ContentLoader
      speed={2}
      height={100}
      viewBox='0 0 1000 100'
      backgroundColor='#d6d6d6'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='25' y='26' rx='5' ry='5' width='1000' height='100' />
    </ContentLoader>
  </S.Container>
);

export default SkeletonOrder;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  width: 100%;
`;
