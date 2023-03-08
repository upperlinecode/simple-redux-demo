import "./App.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createIncrementCountAction,
  createDecrementCountAction,
  createLightsOnAction,
  createLightsOffAction,
} from "./redux/actions";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const areLightsOn = useSelector(
    (state) => state.displayModeReducer.areLightsOn
  );

  const handleIncrementClick = () => {
    // setCount(count + 1);
    const currentAction = createIncrementCountAction(); // -> { type: "INCREMENT" }
    dispatch(currentAction);
  };

  const handleDecrementClick = () => {
    // setCount(count + 1);
    dispatch(createDecrementCountAction());
  };

  const handleLightsOff = () => {
    dispatch(createLightsOffAction());
  };

  const handleLightsOn = () => {
    dispatch(createLightsOnAction());
  };

  const currentStyle = {
    backgroundColor: areLightsOn ? "white" : "black",
    color: areLightsOn ? "black" : "white",
  };

  return (
    <div className="App" style={currentStyle}>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
      </div>
      <div>
        <button onClick={handleLightsOn}>Lights On</button>
        <button onClick={handleLightsOff}>Lights Off</button>
      </div>
    </div>
  );
}

export default App;
