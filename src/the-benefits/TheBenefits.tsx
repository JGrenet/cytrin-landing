import React from "react";
import TheBenefitsStep from "./TheBenefitsStep";

const TheBenefits = () => {
  return (
    <div className="flex flex-col">
      <TheBenefitsStep
        index="1"
        title="You gain time"
        content="You know like us that develop from scratch is tough, long and very time-consuming. You have to make a whole team of developer, graphist, PO works together. All of that means a lot of meetings, agile cycles, needs definition, project vision ans so much more.
All goal is to give you all of that instantly"
      />
      <TheBenefitsStep
        index="2"
        title="You gain money"
        content="Like the first point, it’s long, it’s tough and our goal is to prevent you to mount a global dedicated team to the development of your design system. That means a lot of ressources you can dispatch elsewhere."
      />
      <TheBenefitsStep
        index="3"
        title="You gain consistency"
        content="Having a design system often means you will use it for multiple projects. By using a unique design-sytem you gain consistency between all of your apps. This gain is crucial when you have differents projects based on differents technologies."
      />
      <TheBenefitsStep
        index="4"
        title="You gain quality assurance"
        content="All the atomics components we provide are fully unit tested. We put also huge efforts to make atomics component fully accessible and HTML W3C compliant."
      />
      <TheBenefitsStep
        index="5"
        title="All of this painless"
        content="We want to break the actual workflow of building a design-system. In order to break how we all currently build UI components librairies, we have to deconstruct every steps involved in the process and make each of thoses steps more fluent, easier and quick. This steps include communication inside the team, decisionnal processes, UI design, developpement and integration.
        That’s why we come up with a SaaS plateform accessible from everywhere with huge effort put in the user-experience."
      />
    </div>
  );
};

export default TheBenefits;
