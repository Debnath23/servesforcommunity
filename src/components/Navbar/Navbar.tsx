"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Arrow from "../Svg/Arrow";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
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

      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Subjects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/compiler-design">Compiler Design</HoveredLink>
              <HoveredLink href="/ai">Artificial Intelligence</HoveredLink>
              <HoveredLink href="/computer-graphics">
                Computer Graphics
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Learn from AI tools"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://chat.openai.com/">ChatGPT</HoveredLink>
              <HoveredLink href="https://gemini.google.com/">
                Gemini
              </HoveredLink>
              <HoveredLink href="https://copilot.microsoft.com/">
                Copilot
              </HoveredLink>
              <HoveredLink href="https://chat.olakrutrim.com/">
                Krutrim
              </HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
          <Link href={"/support"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Support Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>

      <div className="flex gap-4 md:mr-[175px]">
        <a
          className="text-lg h-12 pl-5 pr-5 mt-3 gap-0 bg-slate-100 text-slate-500 hover:bg-slate-200 inline-flex items-center border-2 justify-center rounded-full"
          href="/signin"
        >
          Sign in
        </a>
      </div>
    </div>
  );
}
