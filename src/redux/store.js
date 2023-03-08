import { combineReducers, createStore } from "redux";

const INITIAL_COUNT_STATE = { count: 0 };

const countReducer = (state = INITIAL_COUNT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const INITIAL_DISPLAY_STATE = { areLightsOn: false };

const displayModeReducer = (state = INITIAL_DISPLAY_STATE, action) => {
  switch (action.type) {
    case "LIGHTS_ON":
      return { ...state, areLightsOn: true };
    case "LIGHTS_OFF":
      return { ...state, areLightsOn: false };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  countReducer: countReducer,
  displayModeReducer: displayModeReducer,
});

const theStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

theStore.subscribe(() => console.log(theStore.getState()));

theStore.dispatch({ type: "INCREMENT" });
theStore.dispatch({ type: "INCREMENT" });
theStore.dispatch({ type: "INCREMENT" });

export default theStore;
