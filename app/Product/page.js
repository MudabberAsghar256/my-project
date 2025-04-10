"use client";
import Link from "next/link";
import Navbar3 from "../Components/navbar3";
export default function Product() {
  return (
    <div className="bg-white p-6 min-h-screen">
      <Navbar3 />
      {/* <div className="items-end">
        <img src="/image/background-logo.svg" />
      </div> */}
      <Link href="/Sportlight">
        <div className="flex max-w-7xl mx-auto items-center justify-between text-center relative pt-27">
          <div className="flex items-center gap-2 pt-0 absolute left-0">
            <img
              className="w-6 h-6"
              src="/image/righttick-img1.svg"
              alt="Tick Icon"
            />

            <h1 className="text-black text-[16px] hidden md:block ">Back</h1>
          </div>
        </div>
      </Link>
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-start pt-10 ">
        <div>
          <img
            src="/image/product-img.svg"
            alt="Product"
            className="rounded-xl w-full object-cover"
          />
          <div className="mt-4 overflow-x-auto">
            <div className="flex gap-2">
              <img
                src="/image/product-img.svg"
                className="w-20 h-20 object-cover rounded cursor-pointer border-3 border-blue-700"
              />
              <img
                src="/image/product-logo1.svg"
                className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-300"
              />
              <img
                src="/image/product-logo2.svg"
                className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-300"
              />
              <img
                src="/image/product-logo3.svg"
                className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-300"
              />
              <img
                src="/image/product-logo4.svg"
                className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-gray-300"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Name of Product
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis risus
            lorem sem ipsum. In pharetra morbi vestibulum faucibus praesent
            lobortis sed. Lorem ipsum dolor sit amet consectetur. Amet sagittis
            sociis risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
            praesent lobortis sed.
          </p>

          <h3 className="text-gray-700 font-semibold mb-2">FEATURES</h3>
          <div>
            <div className="flex gap-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="flex gap-3 pt-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="flex gap-3 pt-3 py-3">
              <img src="/image/product-tick.svg" />
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
          </div>
          <h3 className="text-[#7E7E7E] font-semibold mb-2">BENEFITS</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis risus
            lorem sem ipsum. In pharetra morbi vestibulum faucibus praesent
            lobortis sed. Lorem ipsum dolor sit amet consectetur. Amet sagittis
            sociis risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
            praesent lobortis sed.
          </p>

          <h3 className="text-[#7E7E7E] font-semibold mb-2">ACHIEVEMENTS</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Amet sagittis sociis risus
            lorem sem ipsum. In pharetra morbi vestibulum faucibus praesent
            lobortis sed. Lorem ipsum dolor sit amet consectetur. Amet sagittis
            sociis risus lorem sem ipsum. In pharetra morbi vestibulum faucibus
            praesent lobortis sed.
          </p>

          <button className="bg-[#265BA7] text-white w-full lg:w-auto px-6 py-2 rounded hover:bg-blue-700 transition">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
