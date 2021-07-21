import React, { useState } from "react";
import TextField from "./common/TextField";

const YellowBand = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mt-16 lg:mt-24 w-full bg-yellow py-10 lg:py-12 px-5 lg:px-24 flex flex-col items-center">
      <h5 className="text-base lg:text-2xl title">
        Interested ? Ask for a demo.
      </h5>
      <TextField
        value={value}
        placeholder="Enter your email"
        className="mt-4"
        onChange={setValue}
      />
    </div>
  );
};

export default YellowBand;
