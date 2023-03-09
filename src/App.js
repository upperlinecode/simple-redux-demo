import "./App.css";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";

const App = () => {
  // const [old_count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  console.log(count);

  const handleIncrementClick = () => {
    dispatch(increment(5));
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleLightsOn = () => {};
  const handleLightsOff = () => {};

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
      </div>
      <div>
        <button onClick={handleLightsOn}>Lights on</button>
        <button onClick={handleLightsOff}>Lights off</button>
      </div>
    </div>
  );
};

export default App;
