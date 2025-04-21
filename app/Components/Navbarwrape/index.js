"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Navbar2 from "../navbar2";
import Navbar3 from "../navbar3";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return <Navbar />;
  if (pathname.startsWith("/Sportlight")) return <Navbar2 />;
  if (pathname.startsWith("/Product")) return <Navbar3 />;
  if (pathname.startsWith("/Explore")) return <Navbar3 />;

  return <Navbar />;
}
