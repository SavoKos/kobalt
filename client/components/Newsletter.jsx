import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function Newsletter() {
  return (
    <S.Container>
      <Image src='/newsletter.png' fill className='bg' />
      <Image
        src='/girleatingpizza.png'
        width={200}
        height={243}
        className='portrait'
      />
      <S.Center>
        <h3>
          <span>Subscribe</span> <br />
          to news
        </h3>
        <S.Form>
          <input type='text' placeholder='Enter your email' />
          <button>Subscribe</button>
        </S.Form>
      </S.Center>
    </S.Container>
  );
}

export default Newsletter;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: relative;
  margin: 5rem 5%;
  border-radius: 5rem;

  @media screen and (min-width: 768px) {
    margin: 10rem 10%;
  }

  .bg {
    width: 100% !important;
    height: 200px !important;
    position: relative !important;
    inset: unset !important;
    border-radius: 1rem;
  }

  .portrait {
    position: absolute;
    bottom: 5px;
    left: 50px;
    transform: scaleX(-1);
  }
`;

S.Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  color: #fff;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;

  h3 {
    top: 0;
    text-transform: uppercase;
    text-align: right;

    span {
      font-weight: 400;
    }
  }
`;

S.Form = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-left: 3rem;
  flex: 100%;

  @media screen and (min-width: 768px) {
    flex: 50%;
  }

  input {
    border-radius: 10rem;
    border: 0;
    outline: 0;
    background-color: #fffffff7;
    padding: 1rem 2rem;
    width: 100%;
    color: #fff;
  }

  button {
    position: absolute;
    right: 0;
    border: 0;
    outline: 0;
    border-radius: 2rem;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;
