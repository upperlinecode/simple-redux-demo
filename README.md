# Redux Demo

Demo steps:

1. Fix the `App.js` so that the counter functionality is working. Ignore logging in / out.
2. Add an initial state to `index.js`. Recommended: `{count: 0}`.
3. Create your first reducer function - these generally take in two arguments (state, action) and implement a switch.
4. Use `createStore` to create your first store with your reducer as an argument.
5. Subscribe to the store and console log the state with `.getState()`.
6. Dispatch a handwritten action to the store.
7. Move all the redux pieces to the `store.js` folder, and import it into our index. Add a Provider so that we can use hooks.
8. Configure your `createStore` with the second argument which enables dev tools. `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
9. Get a dispatch function in your `App.js` so you can dispatch actions from there.
10. Reconfigure your event handlers to dispatch action objects.
11. Write some action creators that return these objects to reduce human error. You'll probably want to make a fresh file for these.
12. Refactor your event handlers to use your action creators.
13. Access the count with `useSelector`.
14. Add in a skeleton of your login reducer function with just the base case, and then refactor your `createStore` to include a `combineReducers` - pass this function an object with your reducers.
15. Refactor your `useSelector` to deal with this more complicated version of state.

Solo Task:

Turn the log in / log out button into a toggle. :)
