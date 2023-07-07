import a from 'axios';
import url from './url';

const axios = a.create({
  baseURL: url,
});

export default axios;
