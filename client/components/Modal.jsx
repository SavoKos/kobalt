import React from 'react';
import styled from 'styled-components';

function Modal({ children, active }) {
  if (!active) return;
  return (
    <S.Modal>
      <S.Opacity />
      <S.ModalContent>{children}</S.ModalContent>
    </S.Modal>
  );
}

export default Modal;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Modal = styled.div`
  width: 100%;
  height: 100%;
  inset: 0;
  position: absolute;
  z-index: 7;
`;

S.ModalContent = styled.div`
  position: absolute;
  inset: 0;
  width: 80%;
  text-align: center;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.darkOrange};
  color: #fff;
  padding: 5rem 1rem;
  border-radius: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;

  h6 {
    margin-bottom: 0.5rem;
  }
`;

S.Opacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000dc;
`;
