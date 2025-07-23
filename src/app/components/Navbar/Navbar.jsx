"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  console.log();
  return (
    <div>
      {!pathName.includes("Dashboard") && (
        <nav className="bg-fuchsia-500 py-6 px-20">
          <ul className="flex justify-center gap-20">
            <Link href="/">
              <li>home</li>
            </Link>
            <Link href="/services">
              <li>services</li>
            </Link>
            <Link href="/about">
              <li>about</li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
