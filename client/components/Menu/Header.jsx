import React from 'react';
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import styled from 'styled-components';

function Header() {
  return (
    <S.Container>
      <S.Search>
        <input type='text' placeholder='Search' />
        <S.SearchIcon>
          <BsSearch className='icon' />
        </S.SearchIcon>
      </S.Search>
      <S.Right>
        <S.Icon>
          <AiOutlineShoppingCart className='cart' />
        </S.Icon>
        <S.Icon>
          <AiOutlineLogin />
        </S.Icon>
      </S.Right>
    </S.Container>
  );
}

export default Header;
// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 0;
`;

S.Search = styled.div`
  position: relative;
  width: 50%;
  width: -webkit-fill-available;

  input {
    outline: 0;
    border: 1px solid #aeadb2;
    padding: 1rem 2rem;
    width: 100%;
    border-radius: 10rem;
  }
`;

S.SearchIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.lightOrange};
  position: absolute;
  right: 5px;
  border-radius: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  cursor: pointer;
`;

S.Icon = styled.div`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 26px;
  margin: 0 0.5rem;
`;

S.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;

  .back {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    padding: 1rem 2.5rem;
    border-radius: 10rem;
    cursor: pointer;
  }
`;

S.Auth = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10rem 0 0 10rem;
  padding: 0.8rem 2rem;
  gap: 1rem;
  color: #fff;

  .user {
    font-size: 30px;
    cursor: pointer;
  }

  p {
    background-color: ${({ theme }) => theme.colors.lightOrange};
    border-radius: 10rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;
