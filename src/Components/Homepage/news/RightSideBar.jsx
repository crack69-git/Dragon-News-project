import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
const RightSideBar = () => {
  return (
    <div className="mt-5">
      <div className="flex w-full max-w-xs flex-col gap-3 mb-5">
        <Button
          className="w-full rounded-md border-2 border-blue-500 text-blue-500 bg-white"
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <Button
          className="w-full rounded-md border-2 bg-white"
          variant="tertiary"
        >
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
      </div>
      <div>
        <h4 className="font-bold">Find Us On:</h4>
        <div></div>
      </div>
    </div>
  );
};

export default RightSideBar;
