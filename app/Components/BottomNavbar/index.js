"use client";
import { useState } from "react";
import Link from "next/link";

export default function BottomNavbar() {
  const [activeTab, setActiveTab] = useState(null);

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
      activeIcon: "/image/boNav-logo3-active.svg",
      iconSize: "w-[24px] h-[24px]",
      route: "/Product",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-[3px] border-[#265BA7] rounded-t-2xl px-2 py-2 flex justify-center gap-4 text-sm sm:hidden z-50">
      {navItems.map((item, index) => (
        <div key={item.key} className="flex items-center ">
          <Link
            href={item.route}
            onClick={() => setActiveTab(item.key)}
            className="no-underline"
          >
            <div
              onClick={() => setActiveTab(item.key)}
              className={`flex flex-col items-center px-2 pr-[14px] py-2  rounded-[12px] cursor-pointer ${
                activeTab === item.key
                  ? "bg-[#265BA7]  text-white"
                  : "text-[#265BA7]"
              }`}
            >
              <img
                src={
                  activeTab === item.key ? item.activeIcon : item.defaultIcon
                }
                alt={item.label}
                className={`${item.iconSize} mb-1`}
              />
              <span className="text-[16px] font-medium">{item.label}</span>
            </div>
          </Link>
          {index !== navItems.length - 1 && (
            <div className="h-10 w-px bg-[#7DAAEB] mx-1"></div>
          )}
        </div>
      ))}
    </div>
  );
}
