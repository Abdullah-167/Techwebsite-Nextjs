import Image from "next/image";
import React from "react";
import WebAppImage from "../../../public/project1.webp";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="w-full bg-[#5E5E5E]">
          <div className="main-container">
            <div className="flex justify-end gap-24 items-center py-4">
              <div className="flex gap-4 items-center">
                <div class="w-full md:min-w-[400px] px-3 py-1 bg-[#565656] text-white border-b-2 rounded border-[#F98400]">
                  <label
                    class="block tracking-wide text-xs mb-2 font-light "
                    for="grid-last-name"
                  >
                    Search
                  </label>
                  <input
                    class="appearance-none bg-transparent block w-full leading-tight focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div class="w-full max-h-[80px] px-3 py-1 bg-[#565656] text-white border-b-2 rounded border-[#F98400]">
                  <label
                    class="block tracking-wide text-xs mb-2 font-light "
                    for="grid-last-name"
                  >
                    Sort
                  </label>
                  <select
                    class="block bg-transparent appearance-none w-full px-4 pr-8 rounded leading-tight focus:outline-none"
                    id="grid-state"
                  >
                    <option></option>
                    <option>None</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 mb-10">
          <div className="main-container">
            <div className="grid grid-cols-5 items-center py-28">
              <div className="col-span-2 max-w-[375px]">
                <h2 className="text-2xl font-normal text-[#545454] mb-10">
                  Love your project
                </h2>
                <p className="text-base font-light text-[#545454] leading-6">
                  Love your project is a requirements capture portal designed to
                  facilitate requirements gathering and prioritisation from
                  users in a collaborative approach.
                </p>
                <div className="flex flex-wrap items-center gap-1 py-7">
                  <span className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm text-[#545454] hover:bg-gray-300 duration-300">
                    <a>Apollo</a>
                  </span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm text-[#545454] hover:bg-gray-300 duration-300">
                    <a>Dataloader</a>
                  </span>
                  <span className="px-3 py-1 border border-gray-300 rounded-full cursor-pointer text-sm text-[#545454] hover:bg-gray-300 duration-300">
                    <a>Apollo</a>
                  </span>
                </div>
              </div>
              <div className="col-span-3 ">
                <Image
                  className="img-shadow"
                  src={WebAppImage}
                  alt=""
                  width={850}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
