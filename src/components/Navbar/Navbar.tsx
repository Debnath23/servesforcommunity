"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
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
            <HoveredLink href="/computer-graphics">Computer Graphics</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Learn from AI tools">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://chat.openai.com/">ChatGPT</HoveredLink>
            <HoveredLink href="https://gemini.google.com/">Gemini</HoveredLink>
            <HoveredLink href="https://copilot.microsoft.com/">Copilot</HoveredLink>
            <HoveredLink href="https://chat.olakrutrim.com/">Krutrim</HoveredLink>
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
  );
}
