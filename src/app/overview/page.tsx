import Card from "@/components/Card";
import Table from "@/components/table/Table";
import { Overview_Column } from "@/components/table/TableColumn";
import { cards, overview } from "@/libs/mock";
import React from "react";

const Overview = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-14 w-full">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>

      <Table
        tableHeader="films"
        columnData={Overview_Column}
        rowData={overview}
      />
    </div>
  );
};

export default Overview;
