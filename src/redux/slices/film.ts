import { createSlice } from "@reduxjs/toolkit";
import { getFilmById, getFilms } from "@/api/services";

const initialState = {
  films: [] as any[],
  film: {},
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "films",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateFilms(state, action) {
      state.films = action.payload.films;
    },
    updateFilm(state, action) {
      state.film = action.payload.film;
    },
  },
});

export default slice.reducer;

// fetch films
export function FetchFilms() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getFilms();
    dispatch(
      slice.actions.updateFilms({
        films: response?.results,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

// fetch single film
export function FetchFilmById(id: number) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getFilmById(id);
    dispatch(
      slice.actions.updateFilm({
        film: response,
      })
    );

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}
