"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Homepage() {
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
      <div className="text-black">
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

        <div className="relative text-white justify-center items-center text-center">
          <h1 className="lg:text-5xl text-[18px]  font-semibold lg:pt-45 pt-30">
            Azelis brings
          </h1>
          <div className="lg:ml-45 ml-28 text-[#2AA7DF] lg:text-5xl text-[18px]  font-semibold ">
            Your ideas
          </div>
          <div className="lg:text-5xl text-3xl font-bold">to life</div>
        </div>
        <div className="  justify-center items-center text-center lg:pt-25 pt-20 font-bold text-[24px] text-black">
          Choose Your Zone
        </div>
        <div className="max-w-screen-xl mx-auto pt-3 p-5">
          <div className="main grid sm:grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div className="child-1   border-2 border-blue-200 lg:p-6 p-3 rounded-[12px] bg-white shadow-lg">
              <div className="md:block flex gap-3">
                <div className="flex justify-between">
                  <img src="/image/home-logo1.svg" alt="Concept Formulations" />
                  <img
                    className="hidden md:block "
                    src="/image/home-logo3.svg"
                    alt="Arrow Icon"
                  />
                </div>
                <div>
                  <Link href="/Catalog">
                    <h2 className="font-bold lg:pt-3 ">Concept Formulations</h2>
                  </Link>
                  <p className="text-gray-600 lg:text-[17px] text-[12px] ">
                    Unveil new product formulations and cutting-edge beauty
                    concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="child-2 border-2 border-blue-200 lg:p-6 p-3 rounded-[12px] bg-white shadow-lg">
              <div className="md:block flex gap-3">
                <div className="flex   justify-between">
                  <img src="/image/home-logo2.svg" alt="Sensory Bar" />
                  <img
                    className="hidden md:block"
                    src="/image/home-logo3.svg"
                    alt="Arrow Icon"
                  />
                </div>
                <div>
                  <h2 className="font-bold lg:pt-3">Sensory Bar</h2>
                  <p className="text-gray-600 lg:text-[17px] text-[12px] ">
                    Engage your senses with our curated to featuring scent and
                    sound.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
