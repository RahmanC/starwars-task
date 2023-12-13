"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IoMdMenu, IoMdClose, IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "@/redux/slices/auth";

const Navbar = ({ sidenav, setSideNav }: NavProps) => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { id } = useParams();
  const { username } = useSelector((state: any) => state.auth);

  const [visible, setVisible] = useState(false);

  const handleBack = () => {
    router.back();
  };
  const handleLogout = () => {
    dispatch(Logout(router.push("/")));
  };

  return (
    <header className="fixed w-full md:w-4/5 shadow-[0px_2px_6px_0px_rgba(229,229,229,0.30)] bg-white flex justify-between items-center pt-6 pb-2 px-3 md:px-8">
      <div className="flex items-center">
        <div className="md:hidden">
          <div
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border cursor-pointer"
            onClick={setSideNav}
          >
            {sidenav ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </div>
        </div>
        {id && (
          <div
            className="flex items-center gap-2 md:gap-4 cursor-pointer"
            onClick={handleBack}
          >
            <Image src="/back.svg" alt="notification" width={9} height={15} />
            <p className="text-[#A4A7B7] text-base font-normal">Back</p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 md:gap-6 relative">
        <Image src="/bell.svg" alt="notification" width={24} height={24} />
        <Image src="/pipe.svg" alt="notification" width={1} height={24} />
        <div
          onClick={() => setVisible(!visible)}
          className="flex items-center gap-4 md:gap-6 cursor-pointer"
        >
          <Image src="/avatar.svg" alt="notification" width={30} height={30} />
          <p className="text-sm md:text-base">{username}</p>
          <Image src="/more.svg" alt="notification" width={17} height={3} />
        </div>
        {visible && (
          <div
            className="absolute top-8 right-1 cursor-pointer flex items-center gap-6 justify-center bg-slate-200  p-3 shadow-[0px_2px_6px_0px_rgba(229,229,229,0.30)] rounded-lg"
            onClick={handleLogout}
          >
            <IoMdLogOut />
            <p className="text-sm">Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
