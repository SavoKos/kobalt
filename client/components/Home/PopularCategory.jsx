import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import CarouselItem from './CarouselItem';
import axios from '../../utils/axiosBackend';
import useDB from '../../context/dbContext';

function PopularCategory() {
  const { food, categories } = useDB();

  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1240: { items: 4 },
  };

  const carouselItems = categories.map((category, i) => (
    <CarouselItem category={category} key={i} food={food} />
  ));

  return (
    <S.Container>
      <S.Header>
        <h4>
          Popular <span>Category</span>
        </h4>
      </S.Header>
      <AliceCarousel
        mouseTracking
        items={carouselItems}
        disableDotsControls={true}
        responsive={responsive}
        renderPrevButton={() => <AiOutlineArrowLeft />}
        renderNextButton={() => <AiOutlineArrowRight />}
      />
    </S.Container>
  );
}

export default PopularCategory;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin: 5rem 5%;
  position: relative;

  .alice-carousel {
    position: unset;
  }

  .alice-carousel__stage-item {
    margin: 0 0.3rem;
  }

  .alice-carousel__wrapper {
    overflow: visible;
  }

  .alice-carousel__next-btn,
  .alice-carousel__prev-btn {
    position: absolute;
    right: 0;
    top: -2px;
    width: fit-content;
    border: 1px solid transparent;
    transition: all ease 0.3s;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;

    &:hover {
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }

  .alice-carousel__prev-btn {
    right: 3rem;
  }

  @media screen and (min-width: 768px) {
    margin: 10rem 10%;

    .alice-carousel__next-btn,
    .alice-carousel__prev-btn {
      padding: 1rem;
    }

    .alice-carousel__prev-btn {
      right: 5rem;
    }
  }
`;

S.Header = styled.div`
  margin-bottom: 8rem;

  h4 {
    font-weight: 700;
    width: 50%;
  }
  span {
    font-weight: 400;
  }
`;
