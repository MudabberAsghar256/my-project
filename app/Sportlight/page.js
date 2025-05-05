"use client";
import Link from "next/link";
import Product2 from "../Common/product2";
export default function Spotlight() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: "/image/mdm-img.svg",
    title: "Product 1",
    description:
      "Unveil new product formulations and cutting-edge beauty concepts.",
  }));
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="absolute top-[-127px] left-1/2 -translate-x-1/2 w-[1048px] h-[370px] rounded-full blur-[100px] opacity-[0.15] z-0"
        style={{ background: "#F9B418" }}
      ></div>
      <div className="relative z-10 max-w-[1320px] mx-auto">
        <div className="text-black text-center px-4 pt-29 lg:pt-40">
          <div className="flex justify-center items-center">
            <Link href="/Catalog">
              <img
                className="w-6 h-6 sm:hidden block"
                src="/image/righttick-img1.svg"
                alt="Tick Icon"
              />
            </Link>
            <img
              className="mx-auto pr-7 lg:pr-0 lg:pt-5"
              src="/image/frame-logo4.svg"
            />
          </div>
          <h1 className="font-bold lg:text-[24px] text-[16px] pt-2">
            Spotlight on Science
          </h1>
          <p className="pt-2 lg:text-[16px] text-[14px] lg:w-1/2 xl:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis risus
            lorem sem ipsum. In pharetra morbi vestibulum faucibus praesent
            lobortis sed. Pharetra ornare purus feugiat libero. Vestibulum
            viverra sed malesuada arcu in.
          </p>
        </div>

        <div className=" pb-[30px] lg:pt-16 pt-7 px-4 lg:px-0">
          <div className="flex items-center justify-between text-center relative">
            <div className="flex items-center absolute left-0">
              <Link href="/Catalog">
                <div className="flex gap-2">
                  <img
                    className="w-6 h-6 hidden md:block"
                    src="/image/righttick-img1.svg"
                    alt="Tick Icon"
                  />
                  <h1 className="text-[#265BA7] text-[16px] hidden md:block">
                    Back
                  </h1>
                </div>
              </Link>
            </div>
            <div className="mx-auto text-black lg:text-[24px] text-[18px] font-semibold">
              Products
            </div>
          </div>
          {/* ----------------------------------------Page Product ------------------------------- */}
          <Link href="/Product">
            <div className="pt-3 lg:pt-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {products.map((product) => (
                  <Product2
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                  />
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
