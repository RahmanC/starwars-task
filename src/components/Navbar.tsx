"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = ({ sidenav, setSideNav }: NavProps) => {
  const router = useRouter();
  const { id } = useParams();

  const handleBack = () => {
    router.back();
  };
  return (
    <header className="fixed w-full md:w-4/5 shadow-[0px_2px_6px_0px_rgba(229,229,229,0.30)] bg-white flex justify-between items-center pt-6 pb-2 px-8">
      <div>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={setSideNav}
          >
            {sidenav ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        {id && (
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleBack}
          >
            <Image src="/back.svg" alt="notification" width={9} height={15} />
            <p className="text-[#A4A7B7] text-base font-normal">Back</p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Image src="/bell.svg" alt="notification" width={24} height={24} />
        <Image src="/pipe.svg" alt="notification" width={1} height={24} />
        <Image src="/avatar.svg" alt="notification" width={30} height={30} />
        <p>John Doe</p>
        <Image src="/more.svg" alt="notification" width={17} height={3} />
      </div>
    </header>
  );
};

export default Navbar;
