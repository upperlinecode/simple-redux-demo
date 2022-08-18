import "./App.css";
// import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actionCreators";

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counterReducer.count);
  const loggedIn = useSelector((state) => state.loginReducer.status);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handelDecrementClick = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handelDecrementClick}>-</button>
      </div>
      <div>
        {loggedIn ? (
          <button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "LOGIN" });
            }}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
