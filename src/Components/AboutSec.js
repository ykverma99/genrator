import React from "react";

const AboutSec = ({theme}) => {

  return (
    <div className="mx-36 space-y-3">
      <h1 className="text-xl font-medium">Use the controls below to style the component on your right.</h1>
      <p className={`${theme ? "text-gray-300" : "text-gray-600"}`}>
        Click on "Get CSS" when you're done.
      </p>
    </div>
  );
};

export default AboutSec;
