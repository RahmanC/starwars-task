import { createSlice } from "@reduxjs/toolkit";
import { getFilms } from "@/api/services";

const initialState = {
  films: [] as any[],
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
