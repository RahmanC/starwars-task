"use client";

import React, { useEffect } from "react";
import Details from "@/components/Details";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FetchSpecieById } from "@/redux/slices/species";

const Specie = () => {
  const { id }: any = useParams();
  const dispatch: any = useDispatch();
  const { specie, isLoading } = useSelector((state: any) => state.species);

  const specieId = parseInt(id, 10);

  useEffect(() => {
    dispatch(FetchSpecieById(specieId));
  }, []);

  return isLoading ? (
    <div>please wait...</div>
  ) : (
    <div>
      <Details
        src="/spec.svg"
        name={specie?.name ?? "-"}
        label1="Designation"
        label2="Language"
        label3="Eye Colors"
        label4="Average Lifespan"
        value1={specie?.designation ?? "-"}
        value2={specie?.language ?? "-"}
        value3={specie?.eye_colors ?? "-"}
        value4={specie?.average_lifespan ?? "-"}
      />
    </div>
  );
};

export default Specie;
