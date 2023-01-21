import a from 'axios';

const url =
  process.env.NODE_ENV === 'production'
    ? ' https://kobaltbe.savokos.com/api/v1'
    : 'http://localhost:5000/api/v1/';
const axios = a.create({
  baseURL: url,
});

axios.defaults.withCredentials = true;

export default axios;
