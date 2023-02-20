import {
  applyMiddleware,
  compose,
  StoreEnhancer,
  createStore,
  AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withReduxEnhancer from 'addon-redux/enhancer';

import rootReducer from './reducers';

const createMiddlewareEnhancer = () => {
  const middleware = [thunk];

  // Uncomment to enable redux-logger in development
  // if (process.env.NODE_ENV === 'development') {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const { logger } = require(`redux-logger`);

  //   middleware.push(logger);
  // }

  return applyMiddleware(...middleware);
};

const createEnhancer = (): StoreEnhancer => {
  const enhancers = [];

  enhancers.push(createMiddlewareEnhancer());

  if (process.env.NODE_ENV !== 'production') {
    // add withReduxEnhancer for Storybook to connect to Redux
    enhancers.push(withReduxEnhancer);
  }
  return compose(...enhancers);
};

const store = createStore(rootReducer, createEnhancer());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store;
