import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Square from "./components/Square";
import { createGrid } from "./Backend";
import Maze from "./components/Maze";
import Popup from "./components/Popup";
import Home from "./components/Home";
import Result from "./components/Result";

function App() {
  const [state, setState] = useState(0);

  const maze = useRef([[]]);
  const ans = useRef([[]]);
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-6">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DDF4E7] via-[#67C090] to-[#124170]"></div>
          {/* You can add more background divs or decorations here */}
        </div>

        {/* Foreground content */}

        {state === 0 && <Home setState={setState} maze={maze} ans={ans} />}
        {state === 1 && (
          <Popup
            Component={Maze}
            maze={maze.current}
            setState={setState}
          ></Popup>
        )}

        {state === 2 && <Result ans={ans} />}
      </div>
    </>
  );
}

export default App;
