import { createSlice } from "@reduxjs/toolkit";
import { getSpecies } from "@/api/services";

const initialState = {
  species: [] as any[],
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "species",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateSpecies(state, action) {
      state.species = action.payload.species;
    },
  },
});

export default slice.reducer;

// fetch Species
export function FetchSpecies() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getSpecies();
    dispatch(
      slice.actions.updateSpecies({
        species: response?.results,
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
