import React, { useState } from "react";
import  Link  from "next/link";

function HeroSection() {
  return (
    <div className="relative px-6 lg:px-8">
    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
        <div className="flex -space-x-1 overflow-hidden sm:justify-center pb-6 pt-6">
          <img className="inline-block rounded-full w-20 ring-2" src="https://cdn.discordapp.com/avatars/727761190100664391/95b86c606865af2e91aa32e4b38cc3e2.png?size=4096" alt="" />

        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Jericho a Multi Purpose Discord Bot</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">trusted by 5 Million+ Users and 1.5k+ Servers.</p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <Link href="https://dsc.gg/jerichobot" className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1  hover:bg-white hover:ring-white hover:text-black">
              Invite Jericho
              <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="https://discord.gg/FHEnytbHWT" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-red-600 hover:ring-red-600">
              Jericho Hub
              <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC"></stop>
                <stop offset="1" stop-color="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    
  </div>
  );
}
export default HeroSection;