import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Brand1 from "../../../public/arm_logo.svg";
import Brand2 from "../../../public/alan_turing.svg";
import Brand3 from "../../../public/aioi.svg";
import Brand4 from "../../../public/cmme_logo.svg";

const Hero = () => {
  return (
    <div className="w-full hero-main">
      <div className="main-container">
        <div>
          <div className="pt-24">
            <div className="sm:bg-[#5E5E5E] bg-transparent max-w-[435px] py-10 sm:px-10 px-5 bg-path text-white">
              <h1 className="text-[48px] font-normal leading-[48px]">
                We create web applications
              </h1>
              <p className="py-10 font-light">
                We build your ideas for web applications, products, tools, and
                dashboards to make them a reality.
              </p>
              <span className="flex justify-center max-w-[150px] items-center gap-4 px-5 py-3 bg-[#F98400] rounded-lg cursor-pointer text-sm text-white hover:bg-[#AE5C01] duration-300 mb-6">
                <a>LET'S CHAT</a>
                <a>
                  <AiOutlineArrowRight />
                </a>
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-24 items-center mt-14">
            <span className="text-xl font-normal text-white">Who we've worked with:</span>
            <Image src={Brand1} alt="Will Squire Logo" width={100} />
            <Image src={Brand2} alt="Will Squire Logo" width={100} />
            <Image src={Brand3} alt="Will Squire Logo" width={100} />
            <Image src={Brand4} alt="Will Squire Logo" width={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
