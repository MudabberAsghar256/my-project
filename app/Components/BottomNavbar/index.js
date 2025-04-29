"use client";
import { useState } from "react";
import Link from "next/link";

export default function BottomNavbar() {
  const [activeTab, setActiveTab] = useState("explore");
  const navItems = [
    {
      key: "about",
      label: "About Azelis",
      defaultIcon: "/image/boNav-logo1.svg",
      activeIcon: "/image/nav-logo.svg",
      iconSize: "w-[37px] h-[24px]",
      route: "/",
    },
    {
      key: "explore",
      label: "Explore All",
      defaultIcon: "/image/boNav-logo2.svg",
      activeIcon: "/image/bottom-logo.svg",
      iconSize: "w-[24px] h-[24px]",
      route: "/Explore",
    },
    {
      key: "contact",
      label: "Contact Us",
      defaultIcon: "/image/boNav-logo3.svg",
      activeIcon: "/image/md-logo.svg",
      iconSize: "w-[24px] h-[24px]",
      route: "/Product",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#E9EFF6] border-t-[3px] border-[#265BA7] rounded-t-2xl px-2 py-2 grid grid-cols-3 text-sm sm:hidden z-50">
      {activeTab !== "explore" && (
        <>
          <div className="absolute left-[35%] top-2 bottom-2 w-px bg-[#7DAAEB] z-0" />
          <div className="absolute right-[35%] top-2  bottom-2 w-px bg-[#7DAAEB] z-0" />
        </>
      )}
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={item.route}
          onClick={() => setActiveTab(item.key)}
          className="flex flex-col items-center justify-center  relative"
        >
          <div
            className={`flex flex-col items-center justify-center w-full py-2 px-2 rounded-[12px] transition ${
              activeTab === item.key
                ? "bg-[#265BA7] text-white"
                : "text-[#265BA7]"
            }`}
          >
            <img
              src={activeTab === item.key ? item.activeIcon : item.defaultIcon}
              alt={item.label}
              className={`${item.iconSize} mb-1`}
            />
            <span className="text-[16px] font-medium text-center">
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
