"use client";

import Card from "@/components/Card";
import Table from "@/components/table/Table";
import { Overview_Column } from "@/components/table/TableColumn";
import { cards, overview } from "@/libs/mock";
import { FetchFilms } from "@/redux/slices/film";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Overview = () => {
  const dispatch: any = useDispatch();
  const { films, isLoading } = useSelector((state: any) => state.film);

  useEffect(() => {
    dispatch(FetchFilms());
  }, []);
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-14 w-full">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>

      <Table
        loading={isLoading}
        tableHeader="films"
        columnData={Overview_Column}
        rowData={overview}
      />
    </div>
  );
};

export default Overview;
