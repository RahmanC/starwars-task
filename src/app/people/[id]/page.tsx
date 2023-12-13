"use client";

import React, { useEffect } from "react";
import Details from "@/components/Details";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilmById } from "@/redux/slices/film";

const SinglePeople = () => {
  const { id }: any = useParams();
  const dispatch: any = useDispatch();
  const { film, isLoading } = useSelector((state: any) => state.film);

  const { title, director, producer, release_date } = film;

  const filmId = parseInt(id, 10);

  useEffect(() => {
    dispatch(FetchFilmById(filmId));
  }, []);

  return isLoading ? (
    <div>please wait...</div>
  ) : (
    <div>
      <Details
        src="/p.svg"
        name={title}
        label1="Director"
        label2="Producer"
        label3="Release Date"
        value1={director}
        value2={producer}
        value3={release_date}
      />
    </div>
  );
};

export default SinglePeople;
