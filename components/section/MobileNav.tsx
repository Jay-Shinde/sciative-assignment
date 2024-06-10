"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";

const MobileNav = () => {
  const [isActive, setActive] = useState("home");
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="items-center border bg-white self-stretch flex aspect-square flex-col justify-center w-[38px] h-[38px] px-3 rounded-[100px] border-solid border-gray-400 hover:bg-[#7440f7]">
            <Image
              width={200}
              height={200}
              src={"/hamburger.svg"}
              className="aspect-square object-contain object-center w-full overflow-hidden"
              alt="Open menu"
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white border-none text-black ">
          {/* SheetContent goes here */}
          <section className="flex h-full justify-start flex-col gap-4 pt-11 ">
            <SheetClose asChild onClick={() => setActive("home")}>
              <Link
                href="/"
                className={`${
                  isActive == "home"
                    ? "bg-[#7440f7] rounded-lg"
                    : " bg-transparent"
                } flex items-center align-middle justify-start gap-2 p-4`}
              >
                <p
                  className={` ${
                    isActive == "home"
                      ? "font-bold text-white"
                      : "font-normal text-gray-700"
                  }`}
                >
                  About
                </p>
              </Link>
            </SheetClose>

            <SheetClose asChild onClick={() => setActive("work")}>
              <Link
                href="/"
                className={`${
                  isActive == "work"
                    ? "bg-[#7440f7] rounded-lg"
                    : " bg-transparent"
                } flex items-center align-middle justify-start gap-2 p-4`}
              >
                <p
                  className={` ${
                    isActive == "work"
                      ? "font-bold text-white"
                      : "font-normal text-gray-700"
                  }`}
                >
                  Work
                </p>
              </Link>
            </SheetClose>
            <SheetClose asChild onClick={() => setActive("research")}>
              <Link
                href="/"
                className={`${
                  isActive == "research"
                    ? "bg-[#7440f7] rounded-lg"
                    : " bg-transparent"
                } flex items-center align-middle justify-start gap-2 p-4`}
              >
                <p
                  className={` ${
                    isActive == "research"
                      ? "font-bold text-white"
                      : "font-normal text-gray-700"
                  }`}
                >
                  Research
                </p>
              </Link>
            </SheetClose>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
