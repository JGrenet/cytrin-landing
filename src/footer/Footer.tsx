import React from "react";
import FooterCol from "./FooterCol";

const Footer = () => {
  return (
    <div className="mt-16 lg:mt-24 w-full bg-yellow-light">
      <div className="container-fluid flex flex-col lg:flex-row justify-between py-8 lg:py-24">
        <FooterCol
          title="Product"
          items={[
            { label: "Product", link: "#" },
            { label: "Pricing", link: "#" },
            { label: "Log In", link: "#" },
          ]}
        />
        <FooterCol
          title="About us"
          items={[
            { label: "About Cytrin", link: "#" },
            { label: "Features", link: "#" },
            { label: "Careers", link: "#" },
          ]}
        />
        <FooterCol
          title="Resources"
          items={[
            { label: "Ask for a demo", link: "#" },
            { label: "Blog", link: "#" },
          ]}
        />
        <FooterCol
          title="Get in touch"
          items={[
            { label: "Twitter", link: "#" },
            { label: "LinkedIn", link: "#" },
          ]}
        />
        <div className="mt-16 lg:mt-0 order-last lg:order-first flex flex-col items-center lg:items-start text-sm lg:text-base font-normal text-darkblue text-center lg:text-left">
          <div className="w-24 h-8 bg-blue"></div>
          <span className=" block mt-5 lg:mt-12">2021 Cytrin by Jérémy G.</span>
          <div className="mt-3 lg:mt-5">
            <a href="#">Terms of service</a>
            {" | "}
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
