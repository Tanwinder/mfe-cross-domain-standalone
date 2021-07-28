const getServiceUrlDev = (type) => {
  switch (type) {
    case 'SERVICE':
      return 'http://localhost:5000';
    case 'HOME':
      return 'http://localhost:4000';
    case 'SEARCH':
      return 'http://localhost:4001';
    case 'ORDERS':
      return 'http://localhost:4002';
    default:
      return 'http://localhost:5000';
  }
};

const getServiceUrlProd = (type) => {
  switch (type) {
    case 'SERVICE':
      return 'https://mfes-login-services.herokuapp.com';
    case 'HOME':
      return 'https://mfe-home-cd.netlify.app';
    case 'SEARCH':
      return 'https://mfe-search-cd.netlify.app';
    case 'ORDERS':
      return 'https://mfe-orders-cd.netlify.app';
    default:
      return 'http://localhost:5000';
  }
};
export const baseUrl = (type) => {
  const ENV = process.env.NODE_ENV || 'development';
  console.log('process.env.NODE_ENV-----', process.env.NODE_ENV);
  if (ENV === 'production') {
    return getServiceUrlProd(type);
  } else {
    return getServiceUrlDev(type);
  }
};
