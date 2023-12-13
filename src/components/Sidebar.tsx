import Image from "next/image";
import React from "react";
import SideMenu from "./SideMenu";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-primary w-full h-full flex flex-col py-8 px-4">
      <Link href="/" className="flex self-center mb-8">
        <Image
          src="/logo.svg"
          width={107}
          height={46}
          alt="starwars"
          priority
        />
      </Link>
      <SideMenu icon="/overview.svg" label="overview" />
      <SideMenu icon="/starship.svg" label="starships" />
      <SideMenu icon="/people.svg" label="people" />
      <SideMenu icon="/species.svg" label="species" />
    </div>
  );
};

export default Sidebar;
