"use client";

import Table from "@/components/table/Table";
import { Specie_Column } from "@/components/table/TableColumn";
import { FetchSpecies } from "@/redux/slices/species";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Species = () => {
  const dispatch: any = useDispatch();
  const { species, isLoading } = useSelector((state: any) => state.species);

  useEffect(() => {
    dispatch(FetchSpecies());
  }, []);
  return (
    <div className="w-full">
      <Table
        loading={isLoading}
        tableHeader="species"
        columnData={Specie_Column}
        rowData={species}
      />
    </div>
  );
};

export default Species;
