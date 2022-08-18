import { combineReducers, createStore } from "redux";

const INITIAL_COUNTER_STATE = { count: 0 };

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const INITIAL_LOGIN_STATE = {
  status: false,
};

const loginReducer = (state = INITIAL_LOGIN_STATE, action) => {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, status: false };
    case "LOGIN":
      return { ...state, status: true };
    default:
      return state;
  }
};

const allReducers = combineReducers({ counterReducer, loginReducer });

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

export default store;
