import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full project-hero relative">
      <div className="w-full">
        <div className="main-container">
          <div className="max-w-[540px] mx-auto  flex flex-col justify-center text-center pt-32 text-white">
            <h1 className="text-[48px] font-normal leading-[48px]">
              What we’ve done
            </h1>
            <p className="py-10 font-light">
              We’ve built things like Content Management Systems (CMSs),
              Software as a Service (SAAS) apps, internal business applications,
              external integrations, Application Programming Interfaces (APIs),
              Progressive Web Apps (PWAs) and so on. Don’t worry if these terms
              seem alien; let us know what you want in your words, and we’ll
              handle the tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
