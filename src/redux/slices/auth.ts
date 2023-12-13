import { createSlice } from "@reduxjs/toolkit";
import { ToggleMenu } from "./util";

const initialState = {
  username: "",
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateUser(state, action) {
      state.username = action.payload.username;
    },
  },
});

export default slice.reducer;

// login
export function LoginUser(username: string, action: any) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.updateIsLoading({
        isLoading: true,
        error: false,
      })
    );

    dispatch(
      slice.actions.updateUser({
        username: username,
      })
    );

    action;

    dispatch(
      slice.actions.updateIsLoading({
        isLoading: false,
        error: false,
      })
    );
  };
}

//logout
export function Logout(action: any) {
  return async (dispatch: any) => {
    action;
    dispatch(
      slice.actions.updateUser({
        username: "",
      })
    );
  };
}
