import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@$%^&*()_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-gray-600 text-center">
        <h1 className="text-red-700 text-center text-4xl">
          Password Generator
        </h1>
        <div className="border-black rounded">
          <input
            type="text"
            value={password}
            readOnly
            className="rounded outline-red-500 px-4 mx-4 my-4  "
            ref={passRef}
          />
          <button
            className="rounded bg-blue-600 outline-blue-600 text-wrap"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div>
          <input
            type="range"
            min={8}
            max={25}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length :{length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            id="numberInput"
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            id="charInput"
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
