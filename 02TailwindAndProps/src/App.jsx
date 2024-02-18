import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-xl">Hello</h1>
      <Card username="HP" />
      <Card username="MacBook" btnText="hello" />
    </>
  );
}

export default App;
