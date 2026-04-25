import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Envelope } from "@gravity-ui/icons";

const NavbarSection = () => {
  const link = (
    <>
      <Link className="hover:text-blue-500" href="/">
        Home
      </Link>
      <Link className="hover:text-blue-500" href="/">
        About
      </Link>
      <Link className="hover:text-blue-500" href="/">
        Career
      </Link>
    </>
  );
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div>
        <ul className="flex gap-5 text-gray-500">{link}</ul>
      </div>
      <div className="flex  items-center gap-5">
        <Image
          src={user}
          alt="User"
          width={30}
          height={30}
          className="rounded-full"
        />
        <Button
          variant="tertiary"
          className="rounded-lg bg-gray-500 text-white"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavbarSection;
