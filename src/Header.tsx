import React from "react";

const Header = () => {
  return (
    <div className="container-fluid flex flex-row justify-between h-8 flex-shrink-0">
      <div className="flex flex-row items-center">
        <div className="w-24 h-8 bg-blue" />
        <div className="ml-24">Home</div>
        <div className="ml-7">Product</div>
        <div className="ml-7">How it works</div>
        <div className="ml-7">Who we are</div>
        <div className="ml-7">Contact</div>
      </div>
      <div className="flex items-center">Fr | En</div>
    </div>
  );
};

export default Header;
