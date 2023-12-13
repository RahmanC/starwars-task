"use client";

import React, { useEffect } from "react";
import Details from "@/components/Details";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FetchStarshipById } from "@/redux/slices/starship";

const Starship = () => {
  const { id }: any = useParams();
  const dispatch: any = useDispatch();
  const { starship, isLoading } = useSelector((state: any) => state.starships);

  const starshipId = parseInt(id, 10);

  useEffect(() => {
    dispatch(FetchStarshipById(starshipId));
  }, []);

  return isLoading ? (
    <div>please wait...</div>
  ) : (
    <div>
      <Details
        src="/spec.svg"
        name={starship?.name ?? "-"}
        label1="Model"
        label2="Passengers"
        label3="Pilots"
        value1={starship?.model ?? "-"}
        value2={starship?.passengers ?? "-"}
        value3={starship?.pilots ?? "-"}
      />
    </div>
  );
};

export default Starship;
