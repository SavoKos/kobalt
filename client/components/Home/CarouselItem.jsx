import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import capitalize from '../../utils/capitalize';

function CarouselItem({ category: { category, image } = 'icecream' }) {
  let color = '#d49660';
  switch (category) {
    case 'fruit':
      color = '#ff2c1c';
      break;
    case 'burger':
      color = '#abd802';
      break;

    case 'pizza':
      color = '#31b7ff';
  }
  return (
    <S.Container>
      <Image
        src={image}
        fill
        className={category}
        sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
      />
      <S.Bottom>
        <p>{capitalize(category)}</p>
        <S.Icon color={color}>
          <AiOutlineArrowRight className='arrow' />
        </S.Icon>
      </S.Bottom>
    </S.Container>
  );
}

export default CarouselItem;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 250px;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  cursor: pointer;
  border-radius: 1rem;

  img {
    align-self: center;
    top: -125px !important;
    max-height: 250px;
    max-width: 250px;
    width: fit-content !important;
    height: fit-content;
    margin: auto;
    position: absolute !important;
  }
`;
S.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  justify-self: flex-end;

  p {
    font-weight: 600;
  }
`;

S.Icon = styled.div`
  border-radius: 100%;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  color: #fff;
`;
