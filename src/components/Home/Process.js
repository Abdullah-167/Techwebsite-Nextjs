import React from "react";
import Image from "next/image";
import discovery from "../../../public/discovery.png";
import design from "../../../public/design.png";
import build from "../../../public/build.png";
import deploy from "../../../public/deploy.png";

const Process = () => {
  return (
    <div className="w-full how-works-path bg-[#F5F5F5] py-40">
      <div className="main-container">
        <h2 className="text-4xl font-normal text-[#545454] mb-12">How does it work?</h2>
        <div className="flex justify-between gap-10">
          <div>
            <div className="max-w-[180px] min-h-[150px] process-path rounded-full">
              <Image
                className=""
                src={discovery}
                alt="Will Squire Discovery"
                width={0}
              />
            </div>
            <h3 className="text-xl font-normal text-[#545454] my-6">
              #1 Discovery
            </h3>
            <p className="text-base font-light text-[#545454]">
              First, we get to know you and your team and gather information
              about your project to work out what we need to solve.
            </p>
          </div>
          <div>
            <div className="max-w-[180px] min-h-[150px] process-path rounded-full">
              <Image
                className=""
                src={design}
                alt="Will Squire Discovery"
                width={0}
              />
            </div>
            <h3 className="text-xl font-normal text-[#545454] my-6">
              #2 Design
            </h3>
            <p className="text-base font-light text-[#545454]">
              Once we know what you want, we start designing—working with rough
              sketches to higher fidelity designs until we're all happy.
            </p>
          </div>
          <div>
            <div className="max-w-[180px] min-h-[150px] process-path rounded-full">
              <Image
                className=""
                src={build}
                alt="Will Squire Discovery"
                width={0}
              />
            </div>
            <h3 className="text-xl font-normal text-[#545454] my-6">
              #3 Build
            </h3>
            <p className="text-base font-light text-[#545454]">
              When we've agreed on what we're going to build, we begin
              developing the software by writing the code that makes it real.
            </p>
          </div>
          <div>
            <div className="max-w-[180px] min-h-[150px] process-path rounded-full">
              <Image
                className=""
                src={deploy}
                alt="Will Squire Discovery"
                width={0}
              />
            </div>
            <h3 className="text-xl font-normal text-[#545454] my-6">
              #4 Deploy
            </h3>
            <p className="text-base font-light text-[#545454]">
              Once the software development is complete and we're happy with it,
              it's time to ship it by making it live for use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
