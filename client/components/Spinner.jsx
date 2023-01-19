import React from 'react';
import styled from 'styled-components';

function Spinner() {
  return (
    <S.Container>
      <S.Spinner />
    </S.Container>
  );
}

export default Spinner;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
S.Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid ${({ theme }) => theme.colors.darkOrange};
  margin: auto;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
