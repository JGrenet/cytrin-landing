import React from "react";
import OurVisionSVG from "./images/ourVision.svg";

const OurVision = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row lg:items-start justify-between">
      <div className="w-48 lg:w-auto">
        <img className="w-full max-w-lg" src={OurVisionSVG} />
      </div>
      <div className="mt-8 lg:mt-0 flex lg:block flex-col items-center w-auto lg:w-128 ml-0 lg:ml-32">
        <h5 className="text-center lg:text-left text-base lg:text-2xl title underlined">
          The state of the situation
        </h5>
        <p className="text-center lg:text-left text mt-3 lg:mt-5 max-w-sm lg:max-w-none">
          Cytrin allows you and your team to be more efficient. Just focus on
          the design, we take care of the rest.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
