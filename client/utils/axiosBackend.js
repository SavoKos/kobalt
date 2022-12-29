import axios from 'axios';

const url =
  process.env.NODE_ENV === 'production'
    ? ' https://kobaltbe.savokos.com/api/v1'
    : 'http://localhost:5000/api/v1/';
const axiosBackend = axios.create({
  baseURL: url,
});

console.log(process);

export default axiosBackend;
