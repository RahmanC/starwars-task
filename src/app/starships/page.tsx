"use client";

import Card from "@/components/Card";
import Table from "@/components/table/Table";
import {
  Overview_Column,
  Starship_Column,
} from "@/components/table/TableColumn";
import { cards, overview } from "@/libs/mock";
import { FetchFilms } from "@/redux/slices/film";
import { FetchStarships } from "@/redux/slices/starship";
import React, { useEffect, useLayoutEffect } from "react";
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
