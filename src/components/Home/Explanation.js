import React from "react";
import Image from "next/image";
import WebAppImage from "../../../public/brooke.webp";
import WebAppImage2 from "../../../public/matthew.webp";

const Explanation = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto">
        <div>
          <div className="grid grid-cols-2 justify-center gap-20 items-center py-20">
            <Image
              className="webapp-img-path"
              src={WebAppImage}
              alt="Will Squire Logo"
              width={850}
            />
            <div className="max-w-[450px] mx-auto">
              <h2 className="text-4xl font-normal text-[#545454] mb-10">
                What's a web application?
              </h2>
              <p className="text-base font-light text-[#545454] leading-6">
                If you've ever used something like Facebook, LinkedIn, and
                Twitter, you already know what a web application is. Unlike
                regular static websites, web applications change and move with
                interaction to allow communication, collaboration and shape data
                around the user.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-end gap-20 items-center py-20">
            <div className="max-w-[450px] mx-auto">
              <h2 className="text-4xl font-normal text-[#545454] mb-10">
                Who needs a web application?
              </h2>
              <p className="text-base font-light text-[#545454] leading-6">
                Suppose you have a business that needs a custom software
                solution to solve a particular problem, or you have an idea for
                an app. In that case, building a web application is one way to
                meet those goals.
              </p>
            </div>
            <Image
              className="webapp-img-path"
              src={WebAppImage2}
              alt="Will Squire Logo"
              width={850}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
