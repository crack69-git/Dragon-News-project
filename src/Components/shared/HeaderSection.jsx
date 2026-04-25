import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { compareAsc, format } from "date-fns";
const HeaderSection = () => {
  return (
    <div className="text-center  space-y-2 pt-10">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={100}
        className="mx-auto"
      />
      <h2>Journalism without fear or favour</h2>
      <p>{format(new Date(), "EEEE, MMMM do yyyy")}</p>
    </div>
  );
};

export default HeaderSection;
