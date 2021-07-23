import React from "react";

interface TheBenefitsStepProps {
  index: string;
  title: string;
  content: string;
}

const TheBenefitsStep = ({ index, title, content }: TheBenefitsStepProps) => {
  return (
    <div className="flex flex-col items-center benefits-step">
      <div>
        <span className="text-base lg:text-2xl font-semibold gradient-text from-yellow to-black">{`${index}. `}</span>
        <span className="text-base lg:text-2xl title mt-2 lg:mt-2.5">
          {title}
        </span>
      </div>
      <p className="text-center text mt-3 lg:mt-5 max-w-4xl">{content}</p>
    </div>
  );
};

export default TheBenefitsStep;
