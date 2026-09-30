import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0a0a0a]">
      <div className="w-12 h-12 border-4 border-white/10 border-b-white rounded-full inline-block box-border animate-spin m-auto"></div>
    </div>
  );
};

export default Loader;
