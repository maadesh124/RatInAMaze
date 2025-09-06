import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Square from "./components/Square";
import { createGrid } from "./Backend";
import Maze from "./components/Maze";
import Popup from "./components/Popup";

function App() {
  const color = "text-[#124170]";
  const color1 = "text-[#0D1164]";
  const [isOpen, setisOpen] = useState(false);
  const dim = useRef([0, 0]);
  const maze = useRef([[]]);
  const ans = useRef([[]]);
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-6">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DDF4E7] via-[#67C090] to-[#124170]"></div>
          {/* You can add more background divs or decorations here */}
        </div>

        {/* Foreground content */}
        {isOpen && (
          <Popup
            Component={Maze}
            maze={maze.current}
            setIsOpen={setisOpen}
          ></Popup>
        )}
        <div className="absolute inset-0 z-10">
          <div
            className="bg-gray-200/20 p-4 rounded-lg 
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col
          items-center gap-4"
          >
            <h3 className={`${color1} text-xl font-medium`}>Enter Maze Size</h3>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col">
                <p className={`${color1}`}>no. of rows</p>
                <input
                  type="text"
                  className=" border-2 border-gray-600 rounded-sm w-[50px]"
                  placeholder="0"
                  onChange={e => (dim.current[0] = e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className={`${color1}`}>no. of cols</p>
                <input
                  type="text"
                  className=" border-2 border-gray-600 rounded-sm w-[50px]"
                  placeholder="0"
                  onChange={e => (dim.current[1] = e.target.value)}
                />
              </div>
            </div>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
              onClick={() => {
                initialize(maze, ans, dim);
                setisOpen(true);
              }}
            >
              create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function initialize(maze, ans, dim) {
  const [q, a] = createGrid(parseInt(dim.current[0]), parseInt(dim.current[1]));
  let m = q.length;
  let n = q[0].length;
  q[0][0] = 2;
  a[0][0] = 2;
  q[m - 1][n - 1] = 3;
  a[m - 1][n - 1] = 3;
  maze.current = q;
  ans.current = a;
}

export default App;
