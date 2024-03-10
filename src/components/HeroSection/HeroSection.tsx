"use client";
import React from "react";

export default function HeroSection() {
  return (
    // <div className="h-auto pt-[150px] flex justify-start items-center bg-white text-black">
    //     <div className="flex items-center justify-center md:inline-flex">
    //       <a className="rainbowBorder mb-10 inline-flex items-center justify-center text-[14px]"
    //       href="/blog/send-marketing-emails-with-resend-broadcasts">
    //       <span className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">Introducing Marketing Emails
    //       <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
    //       </span></a>
    //       </div>
    //       <h1 className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient">Email for<br></br>developers</h1>
    //       <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.</p>

    //   <div>
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       preload="none"
    //       className="sm:w-full sm:h-[100px] md:w-[660px] md:h-[600px] md:ml-10"
    //     >
    //       <source src="/assets/heroVideo.mp4" type="video/mp4" />
    //     </video>
    //   </div>
    // </div>
    <div className="relative z-20 pt-[60px] md:h-screen md:max-h-[950px] md:pt-0">
      <section className="mx-auto max-w-5xl px-6 pb-8 md:h-screen md:max-h-[950px] md:max-w-7xl">
        <div className="flex h-full flex-col items-center justify-between md:flex-row md:pb-24">
          <div className="origin-center-left order-2 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1 lg:pl-16">
            <div className="flex items-center justify-center md:inline-flex">
              <a
                className="rainbowBorder mb-10 inline-flex items-center justify-center text-[14px]"
                href="/blog/send-marketing-emails-with-resend-broadcasts"
              >
                <span className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-1">
                  Introducing Marketing Emails
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <h1 className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient">
              Email for
              <br />
              developers
            </h1>
            <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <a
                className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                href="/signup"
              >
                Get Started
                <span className="text-[#70757E]">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </span>
              </a>
              <a
                className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
                href="/docs"
              >
                Documentation
                <span className="text-[#70757E]">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          <div className="relative order-1 min-h-[225px] min-w-[225px] overflow-hidden grayscale md:overflow-auto md:w-[860px] md:h-[860px] md:pl-[100px]">
            <video
              autoPlay
              muted
              loop
              preload="none"
              className="absolute left-0 top-0 sm:h-[225px] sm:w-[225px] md:h-[860px] md:w-[860px] "
              src="/assets/heroVideo.mp4"
            ></video>
          </div>
        </div>
        {/* <div className=" mt-16 flex animate-hero-text-slide-up-fade items-center justify-center gap-2 text-center md:-mt-20">
          <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
            Backed by
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="grayscale"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_24_57)">
                <rect fill="#FF5100" height="24" rx="5.4" width="24"></rect>
                <rect
                  height="23"
                  rx="4.9"
                  stroke="#FF844B"
                  width="23"
                  x="0.5"
                  y="0.5"
                ></rect>
                <path
                  d="M7.54102 7.31818H9.28604L11.9458 11.9467H12.0552L14.715 7.31818H16.46L12.7662 13.5028V17.5H11.2349V13.5028L7.54102 7.31818Z"
                  fill="white"
                ></path>
              </g>
              <rect
                height="23"
                rx="4.9"
                stroke="#FF5100"
                stroke-opacity="0.1"
                width="23"
                x="0.5"
                y="0.5"
              ></rect>
              <rect
                height="23"
                rx="4.9"
                stroke="url(#paint0_radial_24_57)"
                width="23"
                x="0.5"
                y="0.5"
              ></rect>
              <defs>
                <radialGradient
                  cx="0"
                  cy="0"
                  gradientTransform="translate(7.35) rotate(58.475) scale(34.1384)"
                  gradientUnits="userSpaceOnUse"
                  id="paint0_radial_24_57"
                  r="1"
                >
                  <stop stop-color="white" stop-opacity="0.56"></stop>
                  <stop
                    offset="0.28125"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <clipPath id="clip0_24_57">
                  <rect fill="white" height="24" rx="5.4" width="24"></rect>
                </clipPath>
              </defs>
            </svg>
            <span className="sans bg-gradient-to-br from-white to-slate-10 bg-clip-text text-transparent text-sm leading-[1.6] text-slate-11 font-medium">
              Combinator
            </span>
          </span>
        </div> */}
      </section>
    </div>
  );
}
