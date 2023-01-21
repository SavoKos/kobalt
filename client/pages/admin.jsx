import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import tokenHeader from '../components/tokenHeader';
import useUser from '../context/user';
import axios from '../utils/axiosBackend';

function Admin() {
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    axios
      .get('/user/admin', { headers: tokenHeader() })
      .then((res) => {
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        console.log('ERROR', err);
        router.push('/401');
      });
  }, [router, user]);
  if (!verified) return;

  return (
    <S.Container>
      <Navigation cartIcon={true} homeIcon={true} catalogIcon={true} />
    </S.Container>
  );
}

export default Admin;

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div``;
