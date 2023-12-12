import Card from "@/components/Card";
import { cards } from "@/libs/mock";
import React from "react";

const Overview = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-14 w-full">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </div>
  );
};

export default Overview;
