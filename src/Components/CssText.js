import React from "react";

const CssText = ({ name, value }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <p className="text-sky-300 tracking-wide">{name}</p>
        <p className="text-white">:</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-orange-500 tracking-wider">{value}</p>
        <p className="text-white">;</p>
      </div>
    </div>
  );
};

export default CssText;
