"use client";
import Link from "next/link";
import Navbar2 from "../Components/navbar2";
import Product2 from "../Common/product2";
export default function Sportlight() {
  const products = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    image: "/image/mdm-img.svg",
    title: "Product 1",
    description:
      "Unveil new product formulations and cutting-edge beauty concepts.",
  }));
  return (
    <div className=" bg-white   ">
      {/* <Navbar2 /> */}
      <div
        className="w-full  lg:h-[300px] h-[220px] mx-auto rounded-b-full"
        style={{
          background: "radial-gradient(circle at center, #F9B41826, #ffffff)",
        }}
      >
        <div className="relative text-black ">
          <div className="absolute inset-0 flex justify-center items-center text-center text-white ">
            <div className=" justify-center items-center text-center text-black pt-100 lg:pt-115 lg:p-0 p-4">
              <div className="flex pt-5 justify-center items-center text-center ">
                <Link href="/Catalog">
                  <img
                    className="w-6 h-6 sm:hidden block"
                    src="/image/righttick-img1.svg"
                    alt="Tick Icon"
                  />
                </Link>
                <img className="mx-auto lg:pt-5" src="/image/frame-logo4.svg" />
              </div>
              <h1 className="font-bold lg:text-[24px] ml-5 lg:ml-0 text-[16px] pt-1 ">
                Spotlight on Science
              </h1>
              <p className="pt-1 lg:text-[16px] lg:w-[50%] mx-auto text-[14px] text-ellipsis">
                Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis
                risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
                praesent lobortis sed. Pharetra ornare purus feugiat libero.
                Vestibulum viverra sed malesuada arcu in.
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-[1440px] mx-auto  pt-80 lg:pt-100 p-5 lg:p-0  ">
          <Link href="/Catalog">
            <div className="flex items-center justify-between text-center relative">
              <div className="flex items-center gap-2 pt-0 absolute left-0">
                <img
                  className="w-6 h-6 hidden md:block"
                  src="/image/righttick-img1.svg"
                  alt="Tick Icon"
                />

                <h1 className="text-black text-[16px] hidden md:block">Back</h1>
              </div>

              <div className="mx-auto text-black lg:text-[24px] text-[18px] font-semibold">
                Products
              </div>
            </div>
          </Link>
          <Link href="/Product">
            <div className="lg:pt-10 pt-3 ">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col gap-3 ">
                    <Product2
                      image={product.image}
                      title={product.title}
                      description={product.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
