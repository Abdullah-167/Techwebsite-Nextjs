import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#5E5E5E] py-7">
      <div className="main-container">
        <div className="flex justify-center gap-40 py-10">
          <div>
            <div className="flex items-center gap-3 text-base font-light text-white cursor-pointer hover:underline mb-4">
              <span>
                <HiPhone />
              </span>
              <a>020 3997 9834</a>
            </div>
            <div className="flex items-center gap-3 text-base font-light text-white cursor-pointer hover:underline">
              <span>
                <MdEmail />
              </span>
              <a>hello@willsquire.com</a>
            </div>
          </div>
          <div>
            <div className="flex gap-3 text-base font-light text-white mb-4">
              <span className="mt-5 text-xl">
                <MdLocationOn />
              </span>
              <span>
                Will Squire Ltd <br /> International House <br />
                12 Constance Street
                <br /> London
                <br />
                E16 2DQ
                <br /> United Kingdom
                <br /> (Mail address only)
              </span>
            </div>
          </div>
          <div className="text-base font-light text-white">
            <span>
              VAT No. 265817573 <br />
              Company No. 10707455 <br />
              DUNS No. 222881572
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-1 items-center text-white text-2xl">
          <a
            href=""
            className="rounded-full hover:bg-[#565656] p-2.5 duration-200 cursor-pointer text-xl"
          >
            <BsFacebook />
          </a>
          <a
            href=""
            className="rounded-full hover:bg-[#565656] p-2.5 duration-200 cursor-pointer "
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            className="rounded-full hover:bg-[#565656] p-2.5 duration-200 cursor-pointer "
          >
            <AiFillInstagram />
          </a>
          <a
            href=""
            className="rounded-full hover:bg-[#565656] p-2.5 duration-200 cursor-pointer "
          >
            <AiOutlineTwitter />
          </a>
        </div>
        <div className="flex justify-center my-5 gap-3 text-lg font-light text-white cursor-pointer">
          <a className="hover:underline">Privacy policy</a>
          <span className="">.</span>
          <a className="hover:underline">Cookie policy</a>
        </div>
        <p className="text-sm font-light text-white text-center max-w-[200px] mx-auto">
          © 2021 Will Squire Ltd All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
