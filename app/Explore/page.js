"use client";
import Link from "next/link";

import Product1 from "../Common/product1";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  image: "/image/product-hub.svg",
  title: "Product 1",
  tag: "Mild & Mighty",
  description:
    "Unveil new product formulations and cutting-edge beauty concepts.",
}));

export default function Explore() {
  return (
    <div className="bg-white py-5 ">
      <div className="max-w-[1380]  mx-auto lg:pt-30 p-5 lg:p-0">
        <div className="">
          <Link href="/Product">
            <div className="flex items-center  justify-between text-center relative">
              <div className="flex items-center gap-2 pt-25 lg:pt-0 absolute left-0">
                <img
                  className="w-6 h-6"
                  src="/image/righttick-img1.svg"
                  alt="Tick Icon"
                />
                <h1 className="text-black text-[16px] hidden md:block">Back</h1>
              </div>
              <div className="mx-auto lg:text-black text-[#265BA7] lg:text-[24px] text-[20px] pt-25 lg:pt-0 font-semibold">
                Explore All Products
              </div>
            </div>
          </Link>
        </div>

        <div className="lg:p-0 mt-0 lg:mt-5 ">
          <div className="text-[#7E7E7E] pb-3 text-[20px] lg:text-left text-center pt-3  ">
            Skin Care (9)
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <div key={product.id} className="flex flex-col gap-3 ">
                <Product1
                  image={product.image}
                  title={product.title}
                  tag={product.tag}
                  description={product.description}
                />
                {index === 3 && (
                  <div className="text-[#7E7E7E] lg:text-left text-[20px] text-center">
                    Cosmetics (9)
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
