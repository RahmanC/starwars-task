import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-sm bg-white flex justify-between items-center pt-6 pb-2 px-8">
      <div className="flex items-center gap-4 cursor-pointer">
        <Image src="/back.svg" alt="notification" width={9} height={15} />
        <p className="text-[#A4A7B7] text-base font-normal">Back</p>
      </div>
      <div className="flex items-center gap-6">
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
