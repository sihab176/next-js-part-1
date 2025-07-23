import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-pink-400 py-6 px-20">
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
    </div>
  );
};

export default Navbar;
