const promiseMiddleware = store => next => action => {
  if (typeof action.then === 'function') {
    return Promise.resolve(action).then(store.dispatch);
  }
  return next(action);
};

export default promiseMiddleware;
