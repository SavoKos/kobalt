export default process.env.NODE_ENV === 'production'
  ? ' https://kobaltbe.savokos.com/api/v1'
  : 'http://localhost:5000/api/v1';
