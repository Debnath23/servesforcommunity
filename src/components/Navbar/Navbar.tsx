"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto hidden h-[68px] w-full items-center justify-between transition duration-500 ease-in-out md:flex md:mt-8">
      <div className="flex lg:w-[225px]">
        <span data-state="closed">
          <a
            className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7 py-1"
            aria-label="Resend"
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
        <Link href={"/"}>
          <p className="mr-4">Home</p>
        </Link>
        <Link href={"/subjects"}>
          <p className="mr-4">Subjects</p>
        </Link>
        <Link href={"/contact"}>
          <p className="mr-4">Contact Us</p>
        </Link>
        <Link href={"/support"}>
          <p>Support Us</p>
        </Link>
      </div>

      <div className="flex md:mr-[175px]">
        <Link
          className="text-lg h-12 pl-5 pr-5 mt-3 gap-0 bg-slate-100 text-slate-500 hover:bg-slate-200 inline-flex items-center border-2 justify-center rounded-full"
          href="/signin"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
