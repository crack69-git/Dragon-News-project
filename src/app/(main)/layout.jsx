import BreakingNews from "@/Components/shared/BreakingNews";
import HeaderSection from "@/Components/shared/HeaderSection";
import NavbarSection from "@/Components/shared/NavbarSection";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-11/12 mx-auto">
      <HeaderSection />
      <BreakingNews />
      <NavbarSection />
      <main>{children}</main>
    </div>
  );
};

export default layout;
