"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="w-full">
        <nav className="bg-transperent fixed w-full z-20 top-0 start-0 ">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between p-4">
            <img
              src="/image/nav-logo2.svg"
              className="lg:h-[51px] lg:w-[78px] w-[77px] h-[50px] "
              alt="Logo"
            />
            <div className="flex md:order-2 lg:gap-5 space-x-3 md:space-x-0">
              <div className="hidden md:block text-[#235CA8] text-lg/4  text-right  lg:w-[103px] lg:h-[57px] ">
                Innovation
                <br /> <span className="text-[#27A7DF]">
                  through
                </span> <br /> formulation
              </div>

              <button
                type="button"
                className="inline-flex items-center p-2  justify-center text-sm text-white rounded-lg md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className=" text-[#235CA8] text-right text-lg/4">
                  Innovation
                  <br /> <span className="text-[#27A7DF]">
                    through
                  </span> <br /> formulation
                </div>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-black lg:text-[16px]"
                  >
                    About Azelis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 px-3 text-black lg:text-[16px]"
                  >
                    Explore All
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block py-2 px-3 text-black lg:text-[16px]"
                  >
                    Contact
                  </Link>
                </li>

                <li className="sm:block md:hidden">
                  <button
                    type="button"
                    className="w-full text-white bg-gray-700 rounded-lg text-sm px-4 py-2 text-center hover:bg-amber-600"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
