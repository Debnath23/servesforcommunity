"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function page() {
  return (
    <>
    <Navbar />
    <div className="relative font-serif md:h-screen md:max-h-[950px] h-auto text-yellow-900 ">
      <section className="mx-auto max-w-5xl px-12 md:h-screen md:max-h-[950px] md:max-w-7xl">

        <div className="flex justify-center mt-[2.5rem]">
          <h1 className="text-[3rem] text-slate-700">Our Subjects</h1>
        </div>

        <div className="grid h-auto grid-cols-2 items-center justify-between md:flex-row ">
          <div className="relative order-1 min-h-[225px] min-w-[225px] overflow-hidden md:overflow-auto md:w-[600px] md:h-[600px] sm:mt-16">
            <video
              autoPlay
              muted
              loop
              preload="none"
              className="absolute sm:h-[225px] sm:w-[225px] md:h-[600px] md:w-[600px]"
              src="/assets/eLibraryVideo.mp4"
            ></video>
          </div>
          
          <div className="flex justify-center md:px-[100px] ">
            <ol>
              <li>
                <a
                  href="/subjects/compiler-design"
                  className="text-[1.4rem] text-slate-600 md:my-8 sm:my-12"
                >
                  Compiler Design
                </a>
              </li>
              <li>
                <a
                  href="/subjects/ai"
                  className="text-[1.4rem] text-slate-600 md:my-8 sm:my-12"
                >
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a
                  href="/subjects/computer-graphics"
                  className="text-[1.4rem] text-slate-600 md:my-8 sm:my-12"
                >
                  Computer Graphics
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
