"use client";

import { ToggleMenu } from "@/redux/slices/util";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const SideMenu = ({ icon, label }: SideMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch: any = useDispatch();

  const handleMenu = () => {
    dispatch(ToggleMenu());
    router.push(`/${label}`);
  };

  const isActive = pathname.split("/")[1] === label;

  return (
    <div
      onClick={handleMenu}
      className={`flex items-center justify-start py-2 px-6 rounded cursor-pointer hover:bg-secondary ${
        label === "overview" ? "gap-4 mb-14" : "gap-6 mb-3"
      } ${isActive && "bg-secondary"}`}
    >
      <Image
        src={icon}
        alt=""
        width={label === "overview" ? 24 : 16}
        height={label === "overview" ? 24 : 16}
      />
      <span className="text-white capitalize text-base font-600">{label}</span>
    </div>
  );
};

export default SideMenu;
