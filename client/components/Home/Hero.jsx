import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BtnMeni } from '../../Theme';

function Hero() {
  return (
    <S.Container>
      <S.Text>
        <h1>
          <span>Kobalt</span>
          <br />
          Online restaurant
        </h1>
        <p>
          Kobalt will get you anything you want to your doorstep. <br /> You
          order online, you&apos;ll have it!
        </p>
        <Link href='/catalog'>
          <BtnMeni>Go To Catalog</BtnMeni>
        </Link>
      </S.Text>
      <S.Image>
        <Image
          src='/hero.png'
          fill
          alt='hero'
          priority={true}
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
        />
      </S.Image>
    </S.Container>
  );
}

export default Hero;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  border-bottom-left-radius: 2rem;
  padding: 5rem 5%;
  background: #f46b45; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #eea849,
    #f46b45
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  img {
    max-width: 750px;
    max-height: 570px;
    min-width: 350px;
    min-height: 265px;
    position: relative !important;
    object-fit: cover;
    display: block;
  }

  @media screen and (min-width: 768px) {
    padding: 10rem 10%;
    border-bottom-left-radius: 5rem;
    flex-direction: row;
  }
`;

S.Text = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
  h1 {
    text-transform: uppercase;
  }

  span {
    font-weight: 300;
  }

  p {
    margin: 2rem 0;
    font-weight: 500;
  }
`;

S.Image = styled.div`
  position: relative;
`;
