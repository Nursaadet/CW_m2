import React from "react";

const SpacingAndSizing = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl text-center">Spacing and Sizing</h3>
        <button className="bg-blue-500 text-white p-4 m-1 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 ms-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 ml-4 ">Tıkla</button>
        <button className="bg-blue-500 text-white px-4 py-2 mx-4 ">
          Tıkla
        </button>
      </div>
      <div>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border border-red-500 rounded-md ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-4 py-2 border-[3px] border-red-500 rounded-[10px] ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-6 py-6 w-20 h-20 rounded-full ">
          Tıkla
        </button>
        <button className="bg-green-500 text-white mx-4 px-6 py-6 w-20 h-20 rounded-[50%] ">
          Tıkla
        </button>
      </div>
      <div>
        <button className="bg-indigo-300 rounded-full py-2 mx-1 w-20 ">
          Tıkla
        </button>
        <button className="bg-indigo-300 rounded-full py-2 mx-1 w-1/2 ">
          Tıkla
        </button>
        <button className="bg-indigo-300 rounded-full py-2 mx-1 w-[300px] ">
          Tıkla
        </button>
      </div>
    </>
  );
};

export default SpacingAndSizing;
