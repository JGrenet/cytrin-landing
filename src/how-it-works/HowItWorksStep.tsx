import React from "react";

interface HowItWorksStepProps {
  stepIndex: string | number;
  title: string;
  content: string;
}

const HowItWorksStep = ({ stepIndex, title, content }: HowItWorksStepProps) => {
  return (
    <div className="flex lg:block flex-col items-center last:mt-12">
      <h6 className="inline-block text-center lg:text-left text-sm lg:text-lg font-semibold gradient-text from-yellow to-black">{`STEP ${stepIndex}`}</h6>
      <h5 className="text-center lg:text-left text-base lg:text-2xl title underlined mt-2 lg:mt-2.5">
        {title}
      </h5>
      <p className="text-center lg:text-left text mt-3 lg:mt-5 max-w-sm lg:max-w-none">
        {content}
      </p>
    </div>
  );
};

export default HowItWorksStep;
