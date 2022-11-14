import React, { useState } from "react";
import Link from 'next/link';

function FacSection(){
    return (
   
  <div class="mx-auto max-w-7xl py-12 px-10 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <h2 class="text-3xl font-bold tracking-tight text-white-600 sm:text-4xl">
      <span class="block text-3xl">Having doubts?</span>
      <span class="block text-white">Join Our Support Server</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <Link href="https://discord.gg/FHEnytbHWT" className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-black">Join Server</Link>
      </div>
     
    </div>

</div>
    );
}
export default FacSection;