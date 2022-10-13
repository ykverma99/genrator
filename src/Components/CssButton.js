import React from "react";

const CssButton = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-gray-100 p-32">{children}</div>
    </div>
  );
};

export default CssButton;
