import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import UserData from '../components/Profile/UserData';
import ProtectedRoute from '../components/ProtectedRoute';

function Settings() {
  return (
    <ProtectedRoute>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
      <S.Profile>
        <h2>Settings</h2>
        <UserData />
      </S.Profile>
      <ToastContainer position='bottom-left' />
    </ProtectedRoute>
  );
}

export default Settings;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Profile = styled.div`
  padding: 5rem 5%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 5rem 10%;
    margin: 2rem;
    border-radius: 3rem;
  }

  form {
    min-width: 1000px;
  }

  & > div {
    min-height: unset;
  }
`;
