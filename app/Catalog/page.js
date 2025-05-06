"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function Catalog() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set initial width
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize); // Update width on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white">
      {/* ---------------------------Background Color fixed ---------------------------- */}
      <div
        style={{
          backgroundColor: "#345BA2",
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          clipPath:
            windowWidth >= 1024
              ? "ellipse(80% 80%  at 35% 8%)"
              : windowWidth >= 640
              ? "ellipse(89% 60% at 32% 4%)"
              : "ellipse(100% 100% at 31% 0%)",
          zIndex: 0,
        }}
      ></div>

      <div className="sm:mb- m-auto  sm:h-[380px] h-[250px] bg-white ">
        <div className="relative text-white lg:space-y-[10px]  lg:mr-[80px] justify-center items-center text-center text-base/7 lg:text-base/10 ">
          <h1 className="lg:text-[42px] lg:mr-15 mr-12 text-[25px]  lg:pt-40 pt-30">
            Azelis brings
          </h1>
          <div className="lg:ml-40 ml-20 text-[#2AA7DF] lg:text-[42px] text-[25px] ">
            <span className="font-bold">Your</span> ideas
          </div>
          <div className="lg:text-[42px] text-[25px] mr-[10px] ">to life</div>
        </div>

        <div className="max-w-[1320px] mx-auto pb-[50px] lg:pb-0 lg:pt-20 pt-5 bg-white">
          <div className="  pt-3 p-5  xl:p-0 ">
            {/* -----------------------------------Center Route  Back Button --------------------------- */}
            <div className="flex items-center justify-between text-center relative pb-[20px] lg:pt-7 pt-10">
              <div className="flex items-center pt-0 absolute left-0">
                <Link href="/">
                  <div className="flex gap-2">
                    <img
                      className="w-[22px] h-[22px]"
                      src="/image/righttick-img1.svg"
                      alt="Tick Icon"
                    />

                    <h1 className="text-[#265BA7] text-[16px] hidden md:block">
                      Back
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="mx-auto text-black lg:text-[24px] lg:pr-[60px] text-[15px] font-semibold">
                Choose Your Experience
              </div>
            </div>
            {/* -----------------------------------------------Galary Images ----------------------------------------- */}
            <div className="">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4  lg:p-0 ">
                <div className="relative w-full h-auto">
                  <img
                    src="/image/frame-img1.svg"
                    alt="Background"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-[12px]" />
                  <div className="absolute lg:bottom-5 bottom-3 left-4 lg:left-6 text-white">
                    <img
                      src="/image/frame-logo1.svg"
                      alt="Logo"
                      className="pt-1 w-12 h-12"
                    />
                    <h1 className="text-[18px] pt-1 font-semibold text-[#26BAAC]">
                      Mild & Mighty
                    </h1>
                    <p className="text-[14px] text-[#D4D4D4] leading-tight">
                      A small two line description for the experience
                      <br /> should go here.
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-auto">
                  <img
                    src="/image/frame-img2.svg"
                    alt="Background"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[12px]" />
                  <div className="absolute lg:bottom-5 bottom-3 left-4 lg:left-6 text-white">
                    <img
                      src="/image/frame-logo2.svg"
                      alt="Logo"
                      className="pt-1 w-12 h-12"
                    />
                    <h1 className="text-[18px] pt-1 font-semibold text-[#2AA7DF]">
                      Grab & Go
                    </h1>
                    <p className="text-[14px] text-[#D4D4D4] leading-tight">
                      A small two line description for the experience
                      <br /> should go here.
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-auto">
                  <img
                    src="/image/frame-img3.svg"
                    alt="Background"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-[12px]" />
                  <div className="absolute lg:bottom-5 bottom-3 left-4 lg:left-6 text-white">
                    <img
                      src="/image/frame-logo3.svg"
                      alt="Logo"
                      className="pt-1 w-12 h-12"
                    />
                    <h1 className="text-[18px] pt-1 font-semibold text-[#B68DEC]">
                      Unwind O’Clock
                    </h1>
                    <p className="text-[14px] text-[#D4D4D4] leading-tight">
                      A small two line description for the experience
                      <br /> should go here.
                    </p>
                  </div>
                </div>
              </div>
              {/* ------------------------------------------Galary Imagea 2----------------------------------------- */}
              <div className="grid sm:grid-cols-1  lg:grid-cols-2 lg:gap-6 gap-4 pb-9  lg:pt-6">
                <div className="relative w-full  lg:mt-0 mt-5 lg:h-[266px] rounded-[12px] overflow-hidden">
                  <img
                    src="/image/frame-img4.svg"
                    alt="Background"
                    className="w-full h-[210px]   md:h-auto lg:h-[266px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black " />
                  <div className="absolute lg:bottom-5 bottom-3 left-4 lg:left-6 text-white">
                    <Link href="/Sportlight">
                      <img
                        src="/image/frame-logo4.svg"
                        alt="Logo"
                        className="pt-1 w-12 h-12"
                      />
                      <h1 className="text-[18px] pt-1 font-semibold text-[#F9B418]">
                        Spotlight on Science
                      </h1>
                    </Link>
                    <p className="text-[14px] text-[#D4D4D4] leading-tight">
                      A small two line description for the experience should go
                      here.
                    </p>
                  </div>
                </div>

                <div className="relative w-full lg:h-[266px]  rounded-[12px] overflow-hidden">
                  <img
                    src="/image/frame-img5.svg"
                    alt="Background"
                    className="w-full h-[210px]   md:h-auto lg:h-[266px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                  <div className="absolute lg:bottom-5 bottom-3 left-4 lg:left-6 text-white">
                    <img
                      src="/image/frame-logo5.svg"
                      alt="Logo"
                      className="pt-1 w-12 h-12"
                    />
                    <h1 className="text-[18px] pt-1 font-semibold text-[#D61B72]">
                      Playful Pop Glamour
                    </h1>
                    <p className="text-[14px] text-[#D4D4D4] leading-tight">
                      A small two line description for the experience should go
                      here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
