// Setup requests interception using the given handlers.
const initMockServiceWorker = () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./browser');
    worker.start();
  }
};

export default initMockServiceWorker;
