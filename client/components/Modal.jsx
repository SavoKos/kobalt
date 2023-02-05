import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

function Modal({ children, active, setModalActive }) {
  if (!active) return;
  return (
    <S.Modal>
      <S.Opacity onClick={() => setModalActive(false)} />
      <S.ModalContent>
        <AiOutlineClose onClick={() => setModalActive(false)} />
        {children}
      </S.ModalContent>
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
  position: fixed;
  z-index: 7;
`;

S.ModalContent = styled.div`
  position: absolute;
  inset: 0;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: fit-content;
  color: #000;
  background-color: #fff;
  padding: 5rem 1rem;
  border-radius: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;

  h6 {
    margin-bottom: 0.5rem;
  }

  svg {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 26px;
    color: #000;
    cursor: pointer;
  }
`;

S.Opacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000dc;
`;
