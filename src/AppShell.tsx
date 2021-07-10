import React from "react";
import Header from "./Header";

const AppShell = () => {
    return (
        <div className="h-screen min-h-screen pt-16 flex flex-col">
              <Header />
              <div className="relative container-fluid flex-grow w-full flex items-center">
                  <div>
                      <h3 className="text-lg font-semibold gradient-text from-yellow to-black">A FRAMEWORK AGNOSTIC DESIGN SYSTEM BUILDER</h3>
                      <h1 className="text-6xl mt-8 font-semibold text-darkblue-dark">Stop reivent</h1>
                      <h1 className="text-8xl mt-4 font-semibold text-darkblue-dark">The wheel</h1>
                      <p className="text-base font-normal text-darkblue-dark mt-8 max-w-lg">
                          Cytrin is the first design plateform that allows you to build your own atomics components in a framework agnostic way.
                      </p>
                      <span className="block text-base font-normal text-darkblue-dark mt-8">It's simple, it's fresh.</span>
                  </div>
                  <div className="absolute right-0 w-52 h-52 bg-yellow-light rounded-full"></div>
              </div>
        </div>
    )
}

export default AppShell;