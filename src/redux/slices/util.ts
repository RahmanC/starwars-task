import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidenav: false,
};

const slice = createSlice({
  name: "util",
  initialState,
  reducers: {
    updateSideNav(state) {
      state.sidenav = !state.sidenav;
    },
  },
});

export default slice.reducer;

// toggle menu
export function ToggleMenu() {
  return async (dispatch: any) => {
    dispatch(slice.actions.updateSideNav());
  };
}
