import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    alert("coming soon!");
  };

  const handleDecrementClick = () => {};

  return (
    <div className="App">
      <h1>Count: </h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button>-</button>
      </div>
      <div>
        <button>Lights on</button>
        <button>Lights off</button>
      </div>
    </div>
  );
}

export default App;
