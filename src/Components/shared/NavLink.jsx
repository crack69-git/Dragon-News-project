"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = href === pathname;
  return (
    <Link
      className={`${isActive ? "underline text-gray-900" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
