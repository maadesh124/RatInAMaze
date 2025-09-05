import React from "react";
import { useState } from "react"; // needed in Square

function Square({ pathP, initialState, pos, setIsOpen, dst }) {
  const [state, setstate] = useState(initialState);
  let path = pathP.current;
  let n = path.length;
  let color;

  //console.log(`rec path=${path} pos=${pos} `);

  if (state === 0) color = "bg-white";
  else if (state === 1) color = "bg-[#26667F]";
  else if (state === 2) color = "bg-[#67C090]";
  else if (state === 3) color = "bg-[#FFD93D]";

  //console.log(`pos-${pos} color=${color}`);
  return (
    <button
      onClick={() => {
        onClick(state, path, pos, setstate);
        if (
          path[path.length - 1][0] === dst[0] &&
          path[path.length - 1][1] === dst[1]
        )
          setIsOpen(false);
      }}
      className={`${color} w-[50px] h-[50px] rounded-[20%]`}
    ></button>
  );
}

function onClick(state, path, pos, setstate) {
  let n = path.length;
  if (isNgb(pos, path[n - 1]) && (state === 0 || state === 3)) {
    setstate(2);
    path.push(pos);
  }
  if (pos[0] == path[n - 1][0] && pos[1] == path[n - 1][1]) {
    if (path.length <= 1) return;
    setstate(0);
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
