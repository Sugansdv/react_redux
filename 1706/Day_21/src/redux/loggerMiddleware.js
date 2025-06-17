// Task 12: Simple Logger Middleware
const logger = (storeAPI) => (next) => (action) => {
  console.log('🔸 Dispatching:', action);
  const result = next(action);
  console.log('🔸 Next State:', storeAPI.getState());
  return result;
};

export default logger;
