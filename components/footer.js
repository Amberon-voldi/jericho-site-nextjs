import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-black h-1/4 w-full flex md:flex-row flex-col justify-around items-start pl-20 pr-20 pt-20 pb-10">
                <div className="p-5 ">
                    <ul>
                        <div className="flex -space-x-1 overflow-hidden sm:justify-center pb-3 ">
                            <img className="inline-block rounded-full w-20 ring-2" src="https://cdn.discordapp.com/avatars/727761190100664391/95b86c606865af2e91aa32e4b38cc3e2.png?size=4096" alt="" />

                        </div>
                        <p className="text-gray-50 font-bold text-3xl pb-2">
                            JerichoHub
                        </p>


                    </ul>
                </div>

                <div className="p-5">
                    <ul>


                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Staff
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Support Server
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Commands
                        </li>
                       
                    </ul>
                </div>
                <div className="p-5">
                    <ul>

                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Contact
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Privacy
                        </li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
                            Terms & Conditions
                        </li>
                      
                    </ul>
                </div>
            </div>
            {/* <div className="flex flex-col justify-center items-center text-center  p-5 bg-black">
                <h1 className=" text-gray-50 font-semibold">
                    © 2021-2022 All rights reserved | Build with ❤ by {""}
                    <span className="hover:text-red-600 font-semibold cursor-pointer">
                        Amberon_voldi{" "}
                    </span>
                </h1>
            </div> */}
        </>
    );
}

export default Footer;