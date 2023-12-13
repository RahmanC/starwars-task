"use client";

import Table from "@/components/table/Table";
import { People_Column } from "@/components/table/TableColumn";
import { FetchPeople } from "@/redux/slices/people";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const People = () => {
  const dispatch: any = useDispatch();
  const { people, isLoading } = useSelector((state: any) => state.people);

  useEffect(() => {
    dispatch(FetchPeople());
  }, []);
  return (
    <div className="w-full">
      <Table
        loading={isLoading}
        tableHeader="people"
        columnData={People_Column}
        rowData={people}
      />
    </div>
  );
};

export default People;
