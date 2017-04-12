import { fromJS, Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers, install, loop } from 'redux-loop';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

export default function createReduxStore(initialState = {}, reducers = {}, middlewares = []) {
  const immutableState = Map(fromJS(initialState));
  const immutableGetter = (child, key) => (child ? child.get(key) : void 0);
  const immutableSetter = (child, key, value) => child.set(key, value);

  const reducer = (state, action) => {
    const [nextState, effects] =
      combineReducers(
        reducers,
        immutableState,
        immutableGetter,
        immutableSetter
      )(state || void 0, action);

    return loop(fromJS(nextState), effects);
  };

  const enhancer = compose(
    applyMiddleware(...middlewares, thunk, logger),
    install()
  );

  return createStore(reducer, null, enhancer);
};