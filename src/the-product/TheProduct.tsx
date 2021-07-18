import React from "react";
import TheProductGridItem from "./TheProductGridItem";

const TheProduct = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-24">
      <TheProductGridItem
        title="Assets Management"
        content="Manage all your assets in one place. Import your favorite icon librairy and define your own color palette."
      />
      <TheProductGridItem
        title="Atomic component building"
        content="From a basic atomic component to your fully styled component. You have the control on how you want your components to looks like."
      />
      <TheProductGridItem
        title="Librairy export"
        content="We expose a powerful REST API that allows you to integrate your generated component directly in your projects."
      />
      <TheProductGridItem
        title="Framework agnostic"
        content="All your components are exportables to the most famous web and mobile langages and frameworks. No need to integrate endlessly the same components everywhere."
      />
      <TheProductGridItem
        title="Fully automatically generated documentation"
        content="Because a design-system without a documentation is not a usable design-system, we take care of generating for you all the documentation you need with your components style and your own customisation."
      />
      <TheProductGridItem
        title="Fully unit tested"
        content="It’s important to trust the code you are using. All the generated components will be automatically tested. Clarity, transparency, efficacity."
      />
    </div>
  );
};

export default TheProduct;
