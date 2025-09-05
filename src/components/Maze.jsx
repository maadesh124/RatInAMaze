import React, { useRef } from "react";
import Square from "./Square";

const Maze = ({ maze, setIsOpen }) => {
  const path = useRef([[0, 0]]);
  let pos = [1, 0];
  let m = maze.length;
  let n = maze[0].length;
  console.log(`n=${n}`);
  let grid = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid.push(
        <Square
          pathP={path}
          pos={[i, j]}
          initialState={maze[i][j]}
          dst={[m - 1, n - 1]}
          setIsOpen={setIsOpen}
        />
      );
    }
  }

  return (
    <div
      className="grid bg-[#DDF4E7] rounded-lg p-6"
      style={{
        gridTemplateColumns: `repeat(${n}, 50px)`,
        gridTemplateRows: `repeat(${m}, 50px)`
      }}
    >
      {grid}
    </div>
  );
};

function setFinish(arg) {
  console.log("Game over ********");
}
export default Maze;
