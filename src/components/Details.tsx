import Image from "next/image";
import React from "react";

const Details = ({
  src,
  name,
  label1,
  label2,
  label3,
  label4,
  value1,
  value2,
  value3,
  value4,
}: DetailsProps) => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-5 md:gap-7">
      <Image
        src={src}
        alt={name}
        width={318}
        height={450}
        priority
        className="hidden md:block"
      />
      <Image
        src={src}
        alt={name}
        width={300}
        height={350}
        priority
        className="block md:hidden"
      />
      <div className="md:mt-12 text-[#303B54] text-base font-[500]">
        <p className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-7">
          {name}
        </p>
        <p>
          {label1}: <span>{value1}</span>
        </p>
        <p>
          {label2}: <span>{value2}</span>
        </p>
        <p>
          {label3}: <span>{value3}</span>
        </p>
        {label4 && (
          <p>
            {label4}: <span>{value4}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Details;
