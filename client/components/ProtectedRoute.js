import { useEffect, useState } from 'react';
import axios from '../utils/axiosBackend';
import tokenHeader from './tokenHeader';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  useEffect(() => {
    console.log('USEEFFECT');
    axios
      .get('/user/protected', { headers: tokenHeader() })
      .then((res) => {
        if (res?.data?.token) return setVerified(true);
      })
      .catch((err) => {
        router.push('/login');
      });
  }, [router]);

  return verified && children;
};

export default ProtectedRoute;
