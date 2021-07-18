import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="w-full min-h-auto lg:min-h-screen pt-12 lg:pt-24 container-fluid">
      <h4 className="text-center text-2xl lg:text-5xl title">{title}</h4>
      <div className="w-full mt-4 lg:mt-32">{children}</div>
    </div>
  );
};

export default Section;
