"use client";

import Table from "@/components/table/Table";
import { Starship_Column } from "@/components/table/TableColumn";
import { FetchStarships } from "@/redux/slices/starship";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Starship = () => {
  const dispatch: any = useDispatch();
  const { starships, isLoading } = useSelector((state: any) => state.starships);

  useEffect(() => {
    dispatch(FetchStarships());
  }, []);
  return (
    <div className="w-full">
      <Table
        loading={isLoading}
        tableHeader="starships"
        columnData={Starship_Column}
        rowData={starships}
      />
    </div>
  );
};

export default Starship;
