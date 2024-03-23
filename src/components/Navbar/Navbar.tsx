"use client";
import React from "react";

export default function Navbar() {
  return (
    <div className="mx-auto hidden h-[68px] w-full items-center justify-between transition duration-500 ease-in-out md:flex md:mt-8">
      <div className="flex lg:w-[225px]">
        <span>
          <a
            className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
            href="/home"
          >
            <div className="relative order-1 min-h-[25px] min-w-[25px] overflow-hidden grayscale md:overflow-auto md:w-[175px] md:h-[175px] md:ml-[175px] flex-initial">
              <video
                autoPlay
                muted
                loop
                preload="none"
                className="absolute left-0 top-0 sm:h-[25px] sm:w-[25px] md:h-[175px] md:w-[175px]"
                src="/assets/mainIcon.mp4"
              ></video>
            </div>
          </a>
        </span>
      </div>

      <div className="md:w-[700px] md:h-[50px] border-2 text-lg h-12 pl-5 pr-5 mt-3 gap-4 bg-slate-100 text-slate-500 items-center justify-center rounded-full inline-flex sticky top-5">
        <a 
        href="/"
        className="mr-4 cursor-pointer">
          Home
        </a>
        <a
        href="/subjects"
        className="mr-4 cursor-pointer">
          Subjects
        </a>
        <a 
        href="/contact"
        className="mr-4 cursor-pointer">
          Contact Us
        </a>
        <a 
        href="/support"
        className="mr-4 cursor-pointer">
          Support Us
        </a>
      </div>

      <div className="flex md:mr-[175px]">
        <a
        href="/signin"
         className="text-lg h-12 pl-5 pr-5 mt-3 gap-0 bg-slate-100 text-slate-500 hover:bg-slate-200 inline-flex items-center border-2 justify-center rounded-full
         ">
            Sign in
        </a>
      </div>
    </div>
  );
}
