import { useEffect, useState } from 'react';
import axios from '../utils/axiosBackend';
import tokenHeader from './tokenHeader';
import { useRouter } from 'next/router';
import useUser from '../context/user';

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    console.log('USEEFFECT');
    axios
      .get('/user/protected', { headers: tokenHeader() })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        console.log('ERROR', err);
        router.push('/login');
      });
  }, [router, user]);

  return verified && children;
};

export default ProtectedRoute;
