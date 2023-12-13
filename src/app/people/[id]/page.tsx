"use client";

import React, { useEffect } from "react";
import Details from "@/components/Details";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilmById } from "@/redux/slices/film";
import { FetchPeopleById } from "@/redux/slices/people";

const SinglePeople = () => {
  const { id }: any = useParams();
  const dispatch: any = useDispatch();
  const { singlePeople, isLoading } = useSelector((state: any) => state.people);

  const { name, height, gender, birth_year, skin_color } = singlePeople;

  const peopleId = parseInt(id, 10);

  useEffect(() => {
    dispatch(FetchPeopleById(peopleId));
  }, []);

  return isLoading ? (
    <div>please wait...</div>
  ) : (
    <div>
      <Details
        src="/p.svg"
        name={name}
        label1="Gender"
        label2="Year of Birth"
        label3="Skin Color"
        label4="Height"
        value1={gender}
        value2={birth_year}
        value3={skin_color}
        value4={height}
      />
    </div>
  );
};

export default SinglePeople;
