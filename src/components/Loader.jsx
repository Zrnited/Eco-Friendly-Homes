import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="transition-all ease-in-out delay-100 duration-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <InfinitySpin width="150" color="#6E8C03" />
    </div>
  );
};

export default Loader;
