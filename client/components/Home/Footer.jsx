import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import styled from 'styled-components';
import Newsletter from './Newsletter';

function Footer() {
  return (
    <S.Container>
      <Newsletter />
      <S.Top>
        <Image src='/logo.png' width={200} height={80} alt='logo' />
        <S.NavLinks>
          <Link href='/'>Home</Link>
          <Link href='/catalog'>Catalog</Link>
          <Link href='/cart'>Cart</Link>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
          <Link href='/orders'>Orders</Link>
          <Link href='/settings'>Settings</Link>
        </S.NavLinks>
        <S.SocialMedia>
          <Link
            href='https://twitter.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <BsTwitter />
          </Link>
          <Link
            href='https://facebook.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <BsFacebook />
          </Link>
          <Link
            href='https://instagram.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <BsInstagram />
          </Link>
          <Link
            href='https://linkedin.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <BsLinkedin />
          </Link>
        </S.SocialMedia>
      </S.Top>
      <S.Copyright>© 2022 All rights reserved.</S.Copyright>
    </S.Container>
  );
}

export default Footer;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  margin-top: 15rem;
  border-radius: 2rem 2rem 0 0;
  color: #aeadb2;

  a {
    color: #aeadb2;
  }

  @media screen and (min-width: 768px) {
    border-radius: 5rem 5rem 0 0;
  }
`;

S.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 5% 5rem 5%;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    margin: auto;
    display: block;
  }

  @media screen and (min-width: 768px) {
    padding: 10rem 10% 5rem 10%;
  }
`;

S.NavLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 100%;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;

  a {
    cursor: pointer;
    color: #aeadb2;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    flex: unset;
  }
`;

S.SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 30px;
  margin: auto;

  svg {
    cursor: pointer;
    transition: all ease 0.3s;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.lightOrange};
    }
  }
`;

S.Copyright = styled.p`
  text-align: center;
  border-top: 1px solid #626262;
  padding: 2rem;
`;
