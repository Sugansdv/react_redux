const loggerMiddleware = (store) => (next) => (action) => {
  console.log('🔄 Dispatching action:', action.type);
  if (action.payload !== undefined) {
    console.log('📦 Payload:', action.payload);
  }
  return next(action); // pass action to next middleware/reducer
};

export default loggerMiddleware;