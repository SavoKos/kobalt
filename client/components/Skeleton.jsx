import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Skeleton = (props) => (
  <S.Skeleton>
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox='0 0 300 200'
      backgroundColor='#d3d3d3'
      foregroundColor='#ecebeb'
      {...props}
    >
      <rect x='10' y='83' rx='3' ry='3' width='67' height='11' />
      <rect x='86' y='83' rx='3' ry='3' width='140' height='11' />
      <rect x='137' y='131' rx='3' ry='3' width='53' height='11' />
      <rect x='197' y='131' rx='3' ry='3' width='72' height='11' />
      <rect x='28' y='131' rx='3' ry='3' width='100' height='11' />
      <rect x='10' y='154' rx='3' ry='3' width='37' height='11' />
      <rect x='28' y='106' rx='3' ry='3' width='140' height='11' />
      <rect x='176' y='106' rx='3' ry='3' width='173' height='11' />
      <circle cx='153' cy='41' r='30' />
    </ContentLoader>
  </S.Skeleton>
);

export default Skeleton;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Skeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;
