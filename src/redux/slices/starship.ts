import { createSlice } from "@reduxjs/toolkit";
import { getStarshipById, getStarships } from "@/api/services";

const initialState = {
  starships: [] as any[],
  starship: {},
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateStarships(state, action) {
      state.starships = action.payload.starships;
    },
    updateStarship(state, action) {
      state.starship = action.payload.starship;
    },
  },
});

export default slice.reducer;

// fetch Starships
export function FetchStarships() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getStarships();
    dispatch(
      slice.actions.updateStarships({
        starships: response?.results,
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

// fetch single starship
export function FetchStarshipById(id: number) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getStarshipById(id);
    dispatch(
      slice.actions.updateStarship({
        starship: response,
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
