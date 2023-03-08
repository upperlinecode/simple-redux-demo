# Redux Demo

Demo steps:

1. Fix the `App.js` so that the counter functionality is working. Ignore logging in / out.
2. Add an INITIAL_COUNT_STATE constant to `index.js`. Recommended: `{count: 0}`.
3. Create your first reducer function - these generally take in two arguments (state, action) and implement a switch.
   - Be sure to add your initial state as the default value of the state parameter in your reducer.
4. Pass your reducer to the `combineReducers` function and capture the result in a constant called `allReducers`.
5. Use `createStore` to create your first store with your combined reducers as an argument.
6. Subscribe to the store and console log the state with `.getState()`.
7. Dispatch a handwritten action to the store with `.dispatch()`.
8. Move all the redux pieces to the `store.js` folder, and import it into our index. Add a Provider so that we can use hooks.
9. Configure your `createStore` with the second argument which enables dev tools: `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
10. Get a dispatch function in your `App.js` so you can dispatch actions from there.
11. Reconfigure your event handlers to dispatch action objects.

- Optional: add in a payload property and rewrite your reducer to be more responsive.

12. Write some action creators that return these objects to reduce human error. You'll probably want to make a fresh file for these.
13. Refactor your event handlers to use your action creators.
14. Access the count with `useSelector` and display the count from redux.
15. Create a `displayModeReducer` following the pattern you used for your first reducer and add all corresponding features.
    - Build out the `displayModeReducer` function with a switch.
    - Build out the corresponding action creators. You'll need to import these into the App.
    - Build out event handler functions for the onclick of the lights on / lights off buttons. You'll need to use the dispatch function inside of them.
    - Modify the display of the app to correspond to whether the lights are currently on or off.
16. Refactor your `combineReducers` to include this second reducer.
17. Refactor your `App.js` to allow the lights to turn on and off.

Extensions:

- Add in a "double" button. It should double the amount in state.
- Add in a text field where the user can add a variable number of points to the score.
- Add in a "reset" button which sets the count back to zero.
