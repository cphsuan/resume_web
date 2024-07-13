import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span className="absolute blue-400 text-xl">b</span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
