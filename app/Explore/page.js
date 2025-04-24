"use client";
import Link from "next/link";

import Product1 from "../Common/product1";
const tagOptions = [
  {
    tag: "Mild & Mighty",
    tagColor: "bg-[#26BAAC] pl-2 w-[87px] h-[26px]  p-1",
  },
  {
    tag: "Spotlight on Science",
    tagColor: "bg-[#F9B418] pl-2 w-[125px] h-[26px] p-1",
  },
  { tag: "Grab & Go", tagColor: "bg-[#2AA7DF] pl-2 w-[73px] h-[26px] p-1" },
  {
    tag: "Mild & Mighty",
    tagColor: "bg-[#26BAAC] pl-2 w-[87px] h-[26px]  p-1",
  },
  {
    tag: "Spotlight on Science",
    tagColor: "bg-[#F9B418] pl-2 w-[125px] h-[26px]  p-1",
  },
  { tag: "Grab & Go", tagColor: "bg-[#2AA7DF]  pl-2 w-[73px] h-[26px] p-1" },
  {
    tag: "Mild & Mighty",
    tagColor: "bg-[#26BAAC] pl-2 w-[87px] h-[26px]  p-1",
  },
  {
    tag: "Spotlight on Science",
    tagColor: "bg-[#F9B418] pl-2 w-[125px] h-[26px]  p-1",
  },
  { tag: "Grab & Go", tagColor: "bg-[#2AA7DF]  pl-2 w-[73px] h-[26px] p-1" },
  {
    tag: "Mild & Mighty",
    tagColor: "bg-[#26BAAC] pl-2 w-[87px] h-[26px]  p-1",
  },
  {
    tag: "Spotlight on Science",
    tagColor: "bg-[#F9B418] pl-2 w-[125px] h-[26px]  p-1",
  },
  { tag: "Grab & Go", tagColor: "bg-[#2AA7DF]  pl-2 w-[73px] h-[26px] p-1" },
];
const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  image: "/image/product-hub.svg",
  title: `Product ${i + 1}`,
  tag: tagOptions[i % tagOptions.length].tag,
  tagColor: tagOptions[i % tagOptions.length].tagColor,
  description:
    "Unveil new product formulations and cutting-edge beauty concepts.",
}));

export default function Explore() {
  return (
    <div className="bg-white py-5 ">
      <div className="max-w-[1320]  mx-auto pb-[10px] p-5 xl:p-0">
        <div className="">
          <Link href="/Product">
            <div className="flex items-center lg:pt-25  justify-between text-center relative">
              <div className="flex items-center gap-2 pt-25 lg:pt-0 absolute left-0">
                <img
                  className="w-[41px] lg:w-[24px] lg:h-[24px] h-[41px]"
                  src="/image/righttick-img1.svg"
                  alt="Tick Icon"
                />
                <h1 className="text-[#265BA7] text-[16px] hidden md:block">
                  Back
                </h1>
              </div>
              <div className="mx-auto lg:text-black text-[#265BA7] lg:text-[24px] text-[18px] pt-25 lg:pt-0 font-semibold">
                Explore All Products
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:p-0 mt-0 lg:mt-5 ">
          <div className="text-[#7E7E7E] pb-3 lg:text-[20px] text-[16px] lg:text-left text-center pt-3 font-semibold  ">
            Skin Care (9)
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px] gap-[8px]">
            {products.map((product, index) => (
              <div key={product.id} className="flex flex-col gap-3 ">
                <Product1
                  image={product.image}
                  title={product.title}
                  tag={product.tag}
                  tagColor={product.tagColor}
                  description={product.description}
                />
                {index === 3 && (
                  <div className="text-[#7E7E7E] font-semibold lg:text-left lg:text-[20px] text-[16px] text-center">
                    Cosmetics (6)
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
