"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../Components/navbar";
export default function Catalog() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            backgroundColor: "#345BA2",
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            clipPath:
              windowWidth > 768
                ? "ellipse(85% 45% at 32% 7%)"
                : "ellipse(90% 39% at 32% 0%)",
            zIndex: 0,
          }}
        ></div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,0L40,10.7C80,21,160,43,240,48C320,53,400,43,480,69.3C560,96,640,160,720,192C800,224,880,224,960,208C1040,192,1120,160,1200,133.3C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,1060,0C880,0,800,0,1020,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg> */}
        <div>
          <div className="relative text-black">
            <div className="absolute inset-0 flex justify-center items-center text-center text-white ">
              <div className="lg:text-5xl text-[18px]  font-semibold  pt-75 lg:pt-115">
                <h1 className="">Azelis brings</h1>
                <div className="lg:ml-60 ml-28 text-[#2AA7DF]  ">
                  Your ideas
                </div>
                <div className="">to life</div>
              </div>
            </div>
          </div>
          <div className=" max-w-screen-xl mx-auto lg:py-10 py-5  pt-70 lg:pt-100 ">
            <Link href="/">
              <div className="flex items-center justify-between text-center relative">
                <div className="flex items-center gap-2 pt-0 absolute left-0">
                  <img
                    className="w-6 h-6"
                    src="/image/righttick-img1.svg"
                    alt="Tick Icon"
                  />

                  <h1 className="text-black text-[20px] hidden md:block">
                    Back
                  </h1>
                </div>

                <div className="mx-auto text-black lg:text-[24px] text-[15px] font-semibold">
                  Choose Your Experience
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto lg:py-10 py-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pt-2 pt-10 p-5 lg:p-0 ">
            <div className="relative w-full h-auto">
              <img
                src="/image/frame-img1.svg"
                alt="Background"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-2xl rounded-t-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <img
                  src="/image/frame-logo1.svg"
                  alt="Logo"
                  className="pt-1 w-12 h-12"
                />
                <h1 className="text-[18px] pt-1 font-semibold text-[#26BAAC]">
                  Mild & Mighty
                </h1>
                <p className="text-[14px] leading-tight">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-2xl rounded-t-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <img
                  src="/image/frame-logo2.svg"
                  alt="Logo"
                  className="pt-1 w-12 h-12"
                />
                <h1 className="text-[18px] pt-1 font-semibold text-[#2AA7DF]">
                  Grab & Go
                </h1>
                <p className="text-[14px] leading-tight">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-2xl rounded-t-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <img
                  src="/image/frame-logo3.svg"
                  alt="Logo"
                  className="pt-1 w-12 h-12"
                />
                <h1 className="text-[18px] pt-1 font-semibold text-[#B68DEC]">
                  Unwind O’Clock
                </h1>
                <p className="text-[14px] leading-tight">
                  A small two line description for the experience
                  <br /> should go here.
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-5 mt-5 p-5 lg:p-0">
            <div className="relative w-full h-auto">
              <img
                src="/image/frame-img3.svg"
                alt="Background"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-2xl rounded-t-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
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
                <p className="text-[14px] leading-tight">
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-b-4xl rounded-t-4xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <img
                  src="/image/frame-logo5.svg"
                  alt="Logo"
                  className="pt-1 w-12 h-12"
                />
                <h1 className="text-[18px] pt-1  font-semibold text-[#D61B72]">
                  Playful Pop Glamour
                </h1>
                <p className="text-[14px] leading-tight">
                  A small two line description for the experience
                  <br /> should go here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
