import React from "react";
import { useState } from "react"; // needed in Square

function Square({ pathP, initialState, pos, setState, dst, disabled }) {
  const [square, setSquare] = useState(initialState);
  let path = pathP.current;
  let n = path.length;
  let color;

  //console.log(`rec path=${path} pos=${pos} `);

  if (square === 0) color = "bg-[#DDF4E7]";
  else if (square === 1) color = "bg-[#0D1164]";
  else if (square === 2) color = "bg-[#08CB00]";
  else if (square === 3) color = "bg-[#FFEA00]";

  //console.log(`pos-${pos} color=${color}`);
  return (
    <button
      onClick={() => {
        if (!disabled) {
          onClick(square, path, pos, setSquare);
          if (
            path[path.length - 1][0] === dst[0] &&
            path[path.length - 1][1] === dst[1]
          )
            setState(2);
        }
      }}
      className={`${color} w-[50px] h-[50px] rounded-[20%]`}
    ></button>
  );
}

function onClick(state, path, pos, setSquare) {
  let n = path.length;
  if (isNgb(pos, path[n - 1]) && (state === 0 || state === 3)) {
    setSquare(2);
    path.push(pos);
  }
  if (pos[0] == path[n - 1][0] && pos[1] == path[n - 1][1]) {
    if (path.length <= 1) return;
    setSquare(0);
    path.pop();
  }

  console.log(`path=${path}`);
}

function isNgb(pos, last) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  for (let i = 0; i < 4; i++) {
    let x = pos[0] + dx[i];
    let y = pos[1] + dy[i];
    if (last[0] == x && last[1] == y) return true;
  }
  return false;
}

export default Square;
