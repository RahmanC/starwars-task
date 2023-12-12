import Image from "next/image";
import React from "react";
import SideMenu from "./SideMenu";

const Sidebar = () => {
  return (
    <div className="bg-primary w-full h-full flex flex-col py-8 px-4">
      <Image
        src="/logo.svg"
        width={107}
        height={46}
        alt="starwars"
        className="flex self-center mb-8"
      />
      <SideMenu icon="/overview.svg" label="overview" customClass="mb-14" />
      <SideMenu icon="/starship.svg" label="starships" />
      <SideMenu icon="/people.svg" label="people" />
      <SideMenu icon="/species.svg" label="species" />
    </div>
  );
};

export default Sidebar;
