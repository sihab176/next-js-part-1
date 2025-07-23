"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const isLogeIN =true ;
  const handleNavigation = () => {
    if (isLogeIN) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      {" "}
      <div className="text-4xl ">
        this is about page <br />
      </div>{" "}
      {/* normal to go the path */}
      <div>
        <Link href="/about/address">
          <button className="border-b-2 border-blue-800  ">address</button>
        </Link>
      </div>
      {/* conditional to go path */}
      <div>
        <button
          onClick={handleNavigation}
          className="py-2 px-3 rounded bg-purple-600  "
        >
          address
        </button>
      </div>
    </>
  );
};

export default page;
