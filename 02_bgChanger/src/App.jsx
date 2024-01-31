import React from "react";
import { useState } from "react";

const App = () => {
  const colors = ["Red", "Blue", "Green", "Orange", "Olive", "Grey"];
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
    <h1 className="text-3xl  px-2 py-2 bottom-2 inset-x-0 mx-[35%] text-white rounded-full "> Background Changer - Vite React </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => {
            return (
              <button
                className="bg-white outline-none px-4 py-1 rounded-full text-black shadow-lg"
                onClick={() => {
                  setColor(`${color.toLowerCase()}`);
                }}
              >
                {" "}
                {color}{" "}
              </button>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
};

export default App;
