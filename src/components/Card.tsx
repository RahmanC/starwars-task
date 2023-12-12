import Image from "next/image";
import React from "react";

const Card = ({ label, value, icon, data }: CardProps) => {
  return (
    <div className="flex flex-col gap-6 justify-between shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-6 px-4 rounded-[10px]">
      <div className="flex items-center justify-between">
        <p className="text-base font-bold capitalize text-[#303B54]">{label}</p>
        <Image src={icon} width={27} height={26} alt={label} />
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold text-[#303B54]">{value}</span>
        <span className="text-[9px] text-[#00992B] font-normal">{data}</span>
      </div>
    </div>
  );
};

export default Card;
