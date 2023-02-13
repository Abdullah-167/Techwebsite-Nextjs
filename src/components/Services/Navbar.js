import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.svg";
import { HiPhone } from 'react-icons/hi';
import Link from "next/link";



const Navbar = () => {
    return (
        <div className="w-full">
            <div className="main-container bg-transparent">
                <div className="flex justify-between items-center py-2 font-light">
                    <div className="cursor-pointer">
                        <Image src={Logo} alt="Will Squire Logo" width={60} />
                    </div>
                    <div className="flex justify-between gap-10 items-center text-sm">
                        <Link href={"/"}>
                            <span className="cursor-pointer">HOME</span>
                        </Link>
                        <Link href={"/services"}>
                            <span className="cursor-pointer">SERVICES</span>
                        </Link>
                        <Link href={"/projects"}>
                            <span className="cursor-pointer">PROJECTS</span>
                        </Link>
                        <Link href={"/articles"}>
                            <span className="cursor-pointer">ARTICLES</span>
                        </Link>
                        <Link href={"/"}>
                            <span className="cursor-pointer">CONTACT</span>
                        </Link>
                        <div className="flex items-center gap-4 px-5 py-3.5 bg-[#F98400] rounded-full cursor-pointer text-sm text-white ml-8 hover:bg-[#AE5C01] duration-300">
                            <a><HiPhone /></a>
                            <a>020 3997 9834</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
