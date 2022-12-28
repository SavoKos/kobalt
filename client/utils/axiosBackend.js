import axios from 'axios';

const axiosBackend = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  // 'https://kobaltbe.savokos.com/api/v1'
});

export default axiosBackend;
