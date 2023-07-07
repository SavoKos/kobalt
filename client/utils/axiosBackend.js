import a from 'axios';
import url from './url';

const axios = a.create({
  baseURL: url,
});

axios.defaults.withCredentials = true;

export default axios;
