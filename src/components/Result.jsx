import React from "react";
import Maze from "./Maze";

const Result = ({ ans }) => {
  console.log("res called");
  console.log(`ans=${ans.current}`);
  return (
    <div className="flex flex-col gap-3 ">
      <h2 className="text-2xl font-bold">Congratulations! 🎉</h2>
      <p className="">Here is one of the shortest solutions:</p>
      <div className="flex flex-row justify-center">
        <Maze maze={ans.current} disabled={true} />
      </div>
    </div>
  );
};

export default Result;
