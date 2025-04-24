// app/Components/AppHeightWrapper.jsx
"use client";

import { useEffect } from "react";

export default function AppHeightWrapper({ children }) {
  useEffect(() => {
    const setAppHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };
    setAppHeight();
    window.addEventListener("resize", setAppHeight);
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <div className="min-h-[var(--app-height)] w-full flex flex-col bg-white">
      <main className="flex-grow pb-[70px]">{children}</main>
    </div>
  );
}
