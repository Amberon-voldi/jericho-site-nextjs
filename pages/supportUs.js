import Navbar from "../components/navbar";
import {useEffect} from "react";

function SupportUs() {

  return (
    <div className="bg-black">
   <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
       <iframe className="min-w-full mt-20 border-none p-1" id='kofiframe' src='https://ko-fi.com/jerichohub/?hidefeed=true&widget=true&embed=true&preview=true' height='712' title='jerichohub'></iframe>
      
      </main>
    </div>
  );
}
export default SupportUs;
