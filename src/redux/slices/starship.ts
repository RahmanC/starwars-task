import { createSlice } from "@reduxjs/toolkit";
import { getStarships } from "@/api/services";

const initialState = {
  starships: [] as any[],
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
