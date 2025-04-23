"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function Product() {
  const images = [
    "/image/product-main.svg",
    "/image/background-main2.svg",
    "/image/product-logo3.svg",
    "/image/product-logo4.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative md:p-5  w-full bg-white lg:bg-[linear-gradient(to_right,_#F8FAFD_41%,_white_30%)]">
      <img
        src="/image/background-logo.svg"
        alt="Background Logo"
        className="absolute top-0 right-0 xl:w-[500px] xl:h-[516px] lg:block hidden 
"
      />
      <div className="relative">
        <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 md:grid-cols-10 lg:pt-27 pt-24">
          <div className="h-full col-span-4">
            <Link href="/Sportlight">
              <div className="items-center justify-between text-center hidden md:block pb-4">
                <div className="flex items-center gap-2 pt-0">
                  <img
                    className="w-6 h-6"
                    src="/image/righttick-img1.svg"
                    alt="Tick Icon"
                  />
                  <h1 className="text-[#265BA7] text-[16px]">Back</h1>
                </div>
              </div>
            </Link>
            <div className="relative xl:w-[494px]  xl:h-[447px] w-auto h-[401px]">
              <img
                src={images[currentIndex]}
                alt="Product"
                className="w-full h-full  object-cover lg:rounded-[8px]"
              />

              <Link href="/Sportlight">
                <div className="absolute top-4 left-4 md:hidden block">
                  <img
                    className="w-6 h-6"
                    src="/image/righttick-img1.svg"
                    alt="Tick Icon"
                  />
                </div>
              </Link>
              <div className="mt-4 md:hidden block top-1/2 left-2 lg:ml-12 transform -translate-y-3/2  r p-2  overflow-x-auto lg:w-[400px]">
                <div className="flex gap-2">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                        currentIndex === index
                          ? "border-2 border-blue-500"
                          : "border-gray-300"
                      }`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handlePrev}
                className="absolute lg:top-1/2 md:top-2/4 top-2/5 left-2 transform -translate-y-1/2  r p-2"
              >
                <img
                  src="/image/left-arow.svg"
                  alt="Left Arrow"
                  className="w-7 h-7"
                />
              </button>

              <button
                onClick={handleNext}
                className="absolute lg:top-1/2 md:top-2/4 top-2/5 right-2 transform -translate-y-1/2  p-2"
              >
                <img
                  src="/image/right-arow.svg"
                  alt="Right Arrow"
                  className="w-7 h-7"
                />
              </button>
            </div>

            <div className="mt-4 md:block hidden h overflow-x-auto lg:w-[400px]">
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                      currentIndex === index
                        ? "border-2 border-blue-500"
                        : "border-gray-300"
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className=" lg:p-5  lg:mt-2  col-span-5">
            <div className="p-5 lg:p-0">
              <h2 className="lg:text-[32px] text-[24px] font-bold text-blue-900 lg:mb-4">
                Name of Product
              </h2>
              <p className="text-gray-600 lg:text-[15px] lg:mb-4 lg:w-[530px] ">
                Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis
                risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
                praesent lobortis sed.
                <span className="md:block hidden">
                  Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis
                  risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
                  praesent lobortis sed.
                </span>
              </p>
            </div>
            <h3 className="text-gray-700 bg-[#F8FAFD] lg:bg-transparent mb-2">
              <div className="p-5 lg:p-0">
                <span className="text-[#7E7E7E] font-semibold">FEATURES</span>
                <div className="text-black pt-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex gap-3 lg:pt-3 pt-2">
                      <img src="/image/product-tick.svg" alt="Tick" />
                      <h1 className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur.
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </h3>
            <div className="p-5 lg:p-0">
              <h3 className="text-[#7E7E7E] font-semibold ">BENEFITS</h3>
              <p className="text-gray-600 lg:mb-2">
                Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis
                risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
                praesent lobortis sed. Lorem ipsum dolor sit amet consectetur.
                Amet sagittis sociis risus lorem sem ipsum. In pharetra morbi
                vestibulum faucibus praesent lobortis sed.
              </p>

              <h3 className="text-[#7E7E7E] font-semibold pt-3 ">
                ACHIEVEMENTS
              </h3>
              <p className="text-gray-600 lg:mb-2">
                Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis
                risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
                praesent lobortis sed. Lorem ipsum dolor sit amet consectetur.
                Amet sagittis sociis risus lorem sem ipsum. In pharetra morbi
                vestibulum faucibus praesent lobortis sed.
              </p>
              <button className="bg-[#265BA7] mt-3 text-white text-[16px] w-full py-[7px] lg:w-[121px] lg:h-[42px]   rounded-[8px] hover:bg-blue-700 transition">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
