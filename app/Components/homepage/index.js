"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function Homepage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white w-full">
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
              ? "ellipse(80% 80%  at 31% 8%)"
              : windowWidth >= 640
              ? "ellipse(89% 60% at 32% 4%)"
              : "ellipse(100% 100% at 31% 0%)",
          zIndex: 0,
        }}
      ></div>

      <div className=" sm:h-[380px] h-[255px] bg-white ">
        <div className="relative text-white justify-center items-center text-center text-base/7 lg:text-base/10 ">
          <h1 className="lg:text-[42px] lg:mr-15 mr-12 text-[25px]  lg:pt-40 pt-30">
            Azelis brings
          </h1>
          <div className="lg:ml-40 ml-20 text-[#2AA7DF] lg:text-[42px] text-[25px] ">
            <span className="font-bold">Your</span> ideas
          </div>
          <div className="lg:text-[42px] text-[25px] ">to life</div>
        </div>

        <div className=" lg:pt-30 pt-23 max-w-[1320px] mx-auto  bg-white ">
          <div className="  pt-3 p-5 xl:p-0 ">
            <div className="justify-center bg-white items-center text-center  lg:pb-[24px] pb-[20px]  font-bold lg:text-[24px] text-[18px] text-black">
              Choose Your Zone
            </div>
            <div className="main grid sm:grid-cols-1 lg:grid-cols-2 lg:gap-[24px] gap-[16px]">
              <div className="child-1 border-2 border-blue-200  lg:p-6 p-5 rounded-[16px] bg-[#A2BADE14] shadow-lg">
                <div className="md:block flex gap-[6px]">
                  <div className="flex justify-between">
                    <img
                      src="/image/home-logo1.svg"
                      alt="Concept Formulations"
                    />
                    <Link href="/">
                      <img
                        className="hidden md:block"
                        src="/image/home-logo3.svg"
                        alt="Arrow Icon"
                      />
                    </Link>
                  </div>
                  <div className="lg:mt-[20px]">
                    <Link href="/Catalog">
                      <h2 className="font-bold text-black text-[16px] lg:text-[20px] ">
                        Concept Formulations
                      </h2>
                    </Link>
                    <p className="text-gray-600 lg:text-[16px] text-[12px] pt-[3px]">
                      Unveil new product formulations and cutting-edge beauty
                      concepts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="child-2 border-2 border-blue-200 lg:p-6 p-5 rounded-[16px] bg-[#A2BADE14] shadow-lg">
                <div className="md:block flex gap-[6px]">
                  <div className="flex justify-between">
                    <img src="/image/home-logo2.svg" alt="Sensory Bar" />
                    <Link href="/">
                      <img
                        className="hidden md:block"
                        src="/image/home-logo3.svg"
                        alt="Arrow Icon"
                      />
                    </Link>
                  </div>
                  <div className="lg:pt-[8px]">
                    <h2 className="font-bold lg:pt-3 text-black  text-[16px] lg:text-[20px]">
                      Sensory Bar
                    </h2>
                    <p className="text-gray-600 lg:text-[16px] text-[12px] pt-[3px]">
                      Engage your senses with our experiences featuring and
                      sound.
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
