"use client";
import React from "react";
import Arrow from "../Svg/Arrow";

export default function HeroSection() {
  return (
    <div className="relative z-20 md:h-screen md:max-h-[950px] h-auto text-yellow-900">
      <section className="mx-auto max-w-5xl px-6 pb-[90px] md:h-screen md:max-h-[950px] md:max-w-7xl">
        <div className="flex h-full flex-col items-center justify-between md:flex-row md:pb-24">
          <div className="origin-center-left order-2 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1 lg:pl-16">
            <h1 className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient">
              Help for
              <br />
              Community
            </h1>
            <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <a
                className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-white text-yellow-700 hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border-2 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                href="/signup"
              >
                Get Started
                <Arrow />
              </a>
              <a
                className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border-2 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                href="/docs"
              >
                Documentation
                <Arrow />
              </a>
            </div>
          </div>

          <div className="relative order-1 min-h-[225px] min-w-[225px] overflow-hidden grayscale md:overflow-auto md:w-[860px] md:h-[860px] md:ml-[80px] md:mt-[50px]">
            <video
              autoPlay
              muted
              loop
              preload="none"
              className="absolute left-0 top-0 sm:h-[225px] sm:w-[225px] md:h-[860px] md:w-[860px]"
              src="/assets/heroVideo.mp4"
            ></video>
          </div>
          
        </div>
      </section>
    </div>
  );
}
