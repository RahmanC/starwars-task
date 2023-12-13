import { createSlice } from "@reduxjs/toolkit";
import { getPeople, getPeopleById } from "@/api/services";

const initialState = {
  people: [] as any[],
  singlePeople: {},
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updatePeople(state, action) {
      state.people = action.payload.people;
    },
    updateSinglePeople(state, action) {
      state.singlePeople = action.payload.singlePeople;
    },
  },
});

export default slice.reducer;

// fetch People
export function FetchPeople() {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getPeople();
    dispatch(
      slice.actions.updatePeople({
        people: response?.results,
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

// fetch single people
export function FetchPeopleById(id: number) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    const response = await getPeopleById(id);
    dispatch(
      slice.actions.updateSinglePeople({
        singlePeople: response,
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
