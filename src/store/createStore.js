const listeners = [];
let state;

export default (reducer, initialState = {}) => {
  state = initialState;
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action) || state;
      listeners.forEach(listener => listener(state));
    },
    subscribe: listener => {
      listeners.push(listener);
    }
  };
}
