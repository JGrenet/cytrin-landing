import React from "react";
import Header from "./Header";

const AppShell = () => {
    return (
        <div className="h-screen min-h-screen pt-16 flex flex-col">
              <Header />
              <div className="container-fluid flex-grow w-full flex items-center">
                  <div>
                      <span>A FRAMEWORK AGNOSTIC DESIGN SYSTEM BUILDER</span>
                      <span>Stop reivent</span>
                      <span>The wheel</span>
                  </div>
              </div>
        </div>
    )
}

export default AppShell;