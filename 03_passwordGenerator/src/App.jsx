import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_";

    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Password Length: {length}
        </label>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Include Numbers
        </label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
         
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Include Special Characters
        </label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
      </div>

      <button
        onClick={ 
          copyPassword}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Copy Password
      </button>

      <div className="mt-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Generated Password:
          </label>
          <input
           ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="w-full p-2 bg-white border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
