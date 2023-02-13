import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#5E5E5E] my-10">
      <div className="main-container">
        <div className="flex justify-center gap-24 items-center py-7">
          <div>
            <h3 className="text-4xl font-normal text-white mb-2">Newsletter</h3>
            <p className="text-base text-white">
              Get information on new projects and deals.
            </p>
          </div>
          <div className="flex items-center">
            <div class="w-full md:min-w-[400px] px-3 py-2 bg-[#565656] text-white border-b-2 rounded border-[#F98400]">
              <label
                class="block tracking-wide text-xs mb-2 font-light "
                for="grid-last-name"
              >
                Email Address
              </label>
              <input
                class="appearance-none bg-transparent block w-full leading-tight focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="px-5 py-3.5 min-w-[120px] min-h-[62px] flex justify-center items-center bg-[#F98400] rounded-md cursor-pointer text-base font-light text-white ml-8 hover:bg-[#AE5C01] duration-300">
              <a>SIGN UP</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
