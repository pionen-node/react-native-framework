import createStore from './createStore';

export const config = {
  initialState: {
    app: {
      //
    },
  },
  middlewares: [
    //
  ],
  reducers: {
    //
  },
};

const reduxStore = createStore(config.initialState, config.reducers, config.middlewares);
export default reduxStore;