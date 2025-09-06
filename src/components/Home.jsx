import React from "react";
import { useState, useRef } from "react";
import { createGrid } from "../Backend";
import Maze from "./Maze";
import Popup from "./Popup";

const Home = ({ setState, maze, ans }) => {
  const dim = useRef([0, 0]);
  const color1 = "text-[#DDF4E7]";

  return (
    <div className="absolute inset-0 z-10">
      <div
        className="bg-gray-200/0 p-4 rounded-lg 
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col
          items-center gap-4"
      >
        <h3 className={`${color1} text-xl font-medium`}>Enter Maze Size</h3>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <p className={`${color1}`}>no. of rows</p>
            <input
              type="text"
              className={` border-2 border-[#DDF4E7] rounded-sm w-[50px]`}
              placeholder="0"
              onChange={e => (dim.current[0] = e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <p className={`${color1}`}>no. of cols</p>
            <input
              type="text"
              className=" border-2 border-[#67C090] rounded-sm w-[50px]"
              placeholder="0"
              onChange={e => (dim.current[1] = e.target.value)}
            />
          </div>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
          onClick={() => {
            if (!(isValid(dim.current[0]) && isValid(dim.current[1]))) {
              alert("invalid dimensions");
              return;
            }
            initialize(maze, ans, dim);
            setState(1);
          }}
        >
          create
        </button>
      </div>
    </div>
  );
};

function initialize(maze, ans, dim) {
  const [q, a] = createGrid(parseInt(dim.current[0]), parseInt(dim.current[1]));
  let m = q.length;
  let n = q[0].length;
  q[0][0] = 2;
  a[0][0] = 2;
  q[m - 1][n - 1] = 3;
  a[m - 1][n - 1] = 2;
  maze.current = q;
  ans.current = a;
}

function isValid(str) {
  const num = Number(str);
  return !isNaN(num) && num > 0 && num <= 10;
}

export default Home;
