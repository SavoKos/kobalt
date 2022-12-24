import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

function CarouselItem({ category = 'Sladoled' }) {
  let color = '#d49660';
  switch (category) {
    case 'Povrce':
      color = '#ff2c1c';
      break;
    case 'Burgeri':
      color = '#abd802';
      break;

    case 'Pica':
      color = '#31b7ff';
  }
  return (
    <S.Container>
      {category === 'Pica' ||
      category === 'Povrce' ||
      category === 'Burgeri' ? (
        <Image
          src={`/${category}.png`}
          width={250}
          height={250}
          className={category.toLowerCase()}
        />
      ) : (
        <Image
          src={`/${category}.png`}
          width={200}
          height={306}
          className={category.toLowerCase()}
        />
      )}
      <S.Bottom>
        <p>{category}</p>
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
  min-height: 250px;
  justify-content: flex-end;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.42);
  cursor: pointer;
  border-radius: 1rem;

  img {
    align-self: center;
    top: 0;
    position: absolute;
    top: -70px;
  }

  .sladoled {
    align-self: flex-end;
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
