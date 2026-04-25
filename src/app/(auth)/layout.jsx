import NavbarSection from "@/Components/shared/NavbarSection";
import React from "react";
import { montserrat } from "../layout";

const LogAuthpage = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <NavbarSection />
      {children}
    </div>
  );
};

export default LogAuthpage;
