import React from "react";
import HowItWorks1 from "../images/howItWorks1.svg";
import HowItWorks2 from "../images/howItWorks2.svg";
import HowItWorksStep from "./HowItWorksStep";

const HowItWorks = () => {
  return (
    <>
      <div className="flex items-center lg:items-stretch flex-col lg:flex-row lg:items-start justify-between">
        <div className="w-48 lg:w-auto">
          <img className="w-full max-w-lg" src={HowItWorks1} />
        </div>
        <div className="mt-8 lg:mt-0 flex flex-col justify-start lg:justify-center items-center w-auto lg:w-128 ml-0 lg:ml-32">
          <HowItWorksStep
            stepIndex="1"
            title="Import and manage your assets"
            content="Define your typography, import your icons. Cytring allows you to centralize everything in one place."
          />
          <HowItWorksStep
            stepIndex="2"
            title="Select your first atomic component"
            content="Choose a component among a list of prebuilt components. We will continue to add components in the future."
          />
        </div>
      </div>
      <div className="mt-12 lg:mt-32 flex items-center lg:items-stretch flex-col lg:flex-row lg:items-start justify-between">
        <div className="w-48 lg:w-auto">
          <img className="w-full max-w-lg" src={HowItWorks2} />
        </div>
        <div className="mt-8 lg:mt-0 flex flex-col justify-start lg:justify-center items-center w-auto lg:w-128 ml-0 lg:ml-32">
          <HowItWorksStep
            stepIndex="3"
            title="Customize your component"
            content="We provide you a visual interface to customize the style of your components. Manage the differents visual states, adjust the typography. All of that in a simple and intuitive way."
          />
          <HowItWorksStep
            stepIndex="4"
            title="Export your generated library"
            content="Once you’re done with the state of your components, you can fetch your bundled design-sytem in your application using a REST endpoint we provide. The generated librairy can be included in all majors web and mobile frameworks."
          />
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
