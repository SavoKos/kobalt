import Cookies from 'js-cookie';

const tokenHeader = () => {
  const jwt = Cookies.get('jwt');
  if (jwt) return { Authorization: 'Bearer ' + jwt };
  return {};
};
export default tokenHeader;
