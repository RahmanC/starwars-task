import fetchData from "./requests/fetchData";
import postData from "./requests/postData";

export const getFilms = async () => {
  const respData = await fetchData("/films/");
  return respData;
};

export const getFilmById = async (id: string) => {
  const respData = await fetchData(`/films/${id}/`);
  return respData;
};
