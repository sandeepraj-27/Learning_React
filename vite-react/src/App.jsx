import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const decreaseValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>react app with vite</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
