import { useState } from "react";

function Popup({ Component, maze, setIsOpen }) {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-1000 fixed inset-0 flex items-center justify-center bg-black/50 ">
      <div className="flex flex-col w-fit transform  -translate-y-[10px]">
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className=" text-gray-100 text-5xl font-bold w-fit justify-end"
          >
            ×
          </button>
        </div>
        <div className="py-5 px-10">
          <Component maze={maze} setIsOpen={setIsOpen} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Popup;
