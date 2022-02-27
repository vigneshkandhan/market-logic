import createStore from './createStore';
import todoReducer, { initialState as todoInitialState } from './todos';

export default createStore(todoReducer, todoInitialState);
