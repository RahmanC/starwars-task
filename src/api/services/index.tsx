import fetchData from "./requests/fetchData";

export const getFilms = async () => {
  const respData = await fetchData("/films/");
  return respData;
};

export const getFilmById = async (id: number) => {
  const respData = await fetchData(`/films/${id}/`);
  return respData;
};

export const getStarships = async () => {
  const respData = await fetchData("/starships/");
  return respData;
};

export const getStarshipById = async (id: number) => {
  const respData = await fetchData(`/starships/${id}/`);
  return respData;
};

export const getPeople = async () => {
  const respData = await fetchData("/people/");
  return respData;
};

export const getPeopleById = async (id: number) => {
  const respData = await fetchData(`/people/${id}/`);
  return respData;
};

export const getSpecies = async () => {
  const respData = await fetchData("/species/");
  return respData;
};

export const getSpecieById = async (id: number) => {
  const respData = await fetchData(`/species/${id}/`);
  return respData;
};
