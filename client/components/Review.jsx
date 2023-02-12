import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';

function Review({ foodId, reviews }) {
  const router = useRouter();
  const [starsSelected, setStarsSelected] = useState(0);
  const { user } = useUser();
  const [review, setReview] = useState(
    reviews.find(
      (review) => review?.food === foodId && review?.user === user?._id
    )
  );

  let starItems = Array(5).fill(0);

  if (!review)
    starItems = starItems.map((_, i) =>
      i < +starsSelected ? (
        <AiFillStar
          key={i}
          onClick={() => !review && setStarsSelected(i + 1)}
        />
      ) : (
        <AiOutlineStar
          key={i}
          onClick={() => !review && setStarsSelected(i + 1)}
          className='outline'
        />
      )
    );

  if (review)
    starItems = starItems.map((_, i) =>
      i < +review.rating ? (
        <AiFillStar
          key={i}
          onClick={() => !review && setStarsSelected(i + 1)}
        />
      ) : (
        <AiOutlineStar
          key={i}
          onClick={() => !review && setStarsSelected(i + 1)}
          className='outline'
        />
      )
    );

  const submitHandler = () => {
    if (!user._id) return router.push('/login');
    axios
      .post('/review', {
        rating: starsSelected,
        user: user._id,
        food: foodId,
      })
      .then(() => {
        toast.success('Review is successfully submitted!');
        setReview({ rating: starsSelected });
      });
  };

  return (
    <S.Container>
      <h4>Your Review</h4>
      <S.Stars active={!review}>{starItems}</S.Stars>
      {!review && (
        <button disabled={starsSelected === 0} onClick={submitHandler}>
          Submit Review
        </button>
      )}
    </S.Container>
  );
}

export default Review;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  margin: 5rem 5%;

  @media screen and (min-width: 768px) {
    margin: 10rem 10%;
  }

  h4 {
    font-weight: 700;
  }

  button {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    border: 0;
    width: fit-content;
    text-align: center;
    margin: auto;
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    color: #fff;

    &:disabled {
      opacity: 0.4;
      color: #000;
      cursor: default;
      background-color: #a5a5a5;
    }
  }
`;

S.Stars = styled.div`
  margin: 3rem 0;
  gap: 1rem;
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.lightOrange};

    cursor: ${({ active }) => (active ? 'pointer' : 'default')};
    font-size: 30px;

    &.outline {
      color: #a5a5a5;
    }
  }
`;
