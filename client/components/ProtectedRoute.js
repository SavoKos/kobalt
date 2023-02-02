import { useEffect, useState } from 'react';
import axios from '../utils/axiosBackend';
import tokenHeader from './tokenHeader';
import { useRouter } from 'next/router';
import useUser from '../context/user';
import Spinner from './Spinner';

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    axios
      .get('/user/protected', { headers: tokenHeader() })
      .then((res) => res?.data?.token && setVerified(true))
      .catch(() => router.push('/login'))
      .finally(() => setLoading(false));
  }, [router, user]);

  if (loading) return <Spinner />;

  return verified && children;
};

export default ProtectedRoute;
