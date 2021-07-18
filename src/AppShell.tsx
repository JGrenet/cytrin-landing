import React from "react";
import Header from "./Header";
import Button from "./common/Button";
import HomeCircleSVG from "./images/homeCircle.svg";
import Section from "./common/Section";
import OurVision from "./OurVision";
import TheProduct from "./the-product/TheProduct";
import HowItWorks from "./how-it-works/HowItWorks";

const AppShell = () => {
  return (
    <>
      <div className="h-auto lg:h-screen pt-8 lg:pt-16 lg:flex flex-col">
        <Header />
        <div className="mt-8 lg:mt-0 container-fluid lg:flex-grow w-full lg:flex items-center justify-between">
          <div className="flex lg:block flex-col items-center">
            <h3 className="text-center lg:text-left text-sm lg:text-lg font-semibold gradient-text from-yellow to-black">
              A FRAMEWORK AGNOSTIC DESIGN SYSTEM BUILDER
            </h3>
            <h1 className="text-4xl lg:text-6xl mt-6 lg:mt-8 title">
              Stop reivent
            </h1>
            <h1 className="text-5xl lg:text-8xl mt-2 lg:mt-4 title">
              The wheel
            </h1>
            <p className="text-center lg:text-left text mt-6 lg:mt-8 max-w-sm lg:max-w-lg">
              Cytrin is the first design plateform that allows you to build your
              own atomics components in a framework agnostic way.
            </p>
            <span className="block text mt-4 lg:mt-8">
              It's simple, it's fresh.
            </span>
            <div className="flex mt-8 flex-col sm:flex-row">
              <Button label="I'm interested" />
              <Button
                label="Discover"
                variant="outlined"
                className="mt-4 sm:mt-0 sm:ml-10"
              />
            </div>
          </div>
          <div className="hidden lg:block flex-grow ml-28">
            <img src={HomeCircleSVG} className="h-full w-full max-w-2xl" />
          </div>
        </div>
      </div>
      <Section title="Our vision">
        <OurVision />
      </Section>
      <Section title="The product">
        <TheProduct />
      </Section>
      <Section title="How it works ?">
        <HowItWorks />
      </Section>
    </>
  );
};

export default AppShell;
