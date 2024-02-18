import { useState } from "react";

import "./App.css";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: Color }}
    >
      hello000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      <div className="fixed flex flex-wrap justify-center bottom-12">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl">
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
