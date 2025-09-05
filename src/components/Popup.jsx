import { useState } from "react";

function Popup({ Component, maze }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Button to open popup */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
      >
        Open Popup
      </button>

      {/* Popup (modal) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
          <Component maze={maze} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

export default Popup;
