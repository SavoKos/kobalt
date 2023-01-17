import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

function Ordered() {
  return (
    <S.Container>
      <Navigation link='/cart' />
    </S.Container>
  );
}

export default Ordered;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div``;
