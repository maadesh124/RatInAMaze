import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Square from "./components/Square";
import { createGrid } from "./Backend";
import Maze from "./components/Maze";
import Popup from "./components/Popup";

function App() {
  let [maze, ans] = createGrid(5, 5);
  maze[0][0] = 2;
  maze[4][4] = 3;
  console.log(ans);
  return (
    <>
      <div className="bg-red-500 h-[100vh]">
        <Popup Component={Maze} maze={ans}></Popup>
      </div>
    </>
  );
}

export default App;
