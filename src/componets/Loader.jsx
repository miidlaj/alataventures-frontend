import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <div class="loader-overlay">
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
