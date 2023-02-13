import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="w-full py-10">
      <div className="main-container">
        <div className="grid grid-cols-2 gap-10">
          <div className="project-card">
            <div className="bg-[#5E5E5E] max-w-[400px] py-12 px-10 bg-path text-white">
              <h3 className="text-2xl font-normal leading-[48px]">Projects</h3>
              <p className="py-6 font-light">
                Checkout some of our previous projects and please feel free to
                let us know what you think. We love feedback.
              </p>
              <span className="flex justify-center max-w-[180px] items-center gap-4 px-5 py-3 bg-[#F98400] rounded-md cursor-pointer text-sm text-white hover:bg-[#AE5C01] duration-300 mb-6">
                <a>VIEW PROJECT</a>
                <a>
                  <AiOutlineArrowRight />
                </a>
              </span>
            </div>
          </div>
          <div className="service-card flex justify-end items-end">
            <div className="bg-[#5E5E5E] max-w-[400px] pt-12 pb-6 pl-20 pr-10 second-bg-path text-white ">
              <h3 className="text-2xl font-normal leading-[48px]">Services</h3>
              <p className="py-6 font-light">
                We cater for those with no technical knowledge that just need a
                website, to the technical who know exactly what they need.
              </p>
              <span className="flex justify-center max-w-[180px] items-center gap-4 px-5 py-3 bg-[#F98400] rounded-md cursor-pointer text-sm text-white hover:bg-[#AE5C01] duration-300 mb-6">
                <a>VIEW SERVICES</a>
                <a>
                  <AiOutlineArrowRight />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
