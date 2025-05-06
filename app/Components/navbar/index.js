"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#345BA2] fixed z-20 top-0 start-0 w-full overflow-auto">
      <div className="flex max-w-[1320px] mx-auto justify-between items-center p-4">
        <Link href="/">
          <img
            src="/image/nav-logo.svg"
            className="lg:h-[51px] lg:w-[78px] w-[77px] h-[50px]"
            alt="Logo"
          />
        </Link>
        <div className="flex md:order-2 lg:gap-5 space-x-3 md:space-x-0">
          <div className=" text-white text-lg/4 text-right lg:w-[103px] lg:h-[57px]">
            Innovation
            <br /> through <br />
            formulation
          </div>
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
                className="block py-2 px-3 text-white lg:text-[16px]"
              >
                About Azelis
              </Link>
            </li>
            <li>
              <Link
                href="/Explore"
                className="block py-2 px-3 text-white lg:text-[16px]"
              >
                Explore All
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="block py-2 px-3 text-white lg:text-[16px]"
              >
                Contact Us
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
  );
}
