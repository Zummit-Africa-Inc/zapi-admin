import React from "react";

import "./styles/loader.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="loader-outer">
        <div className="loader-inner"></div>
      </div>
    </div>
  )
};

export default Loader;