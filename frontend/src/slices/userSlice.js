import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: localStorage.getItem("userData")
    ? JSON.stringify(localStorage.getItem("userData"))
    : null,
};

const userSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logoutState: (state, action) => {
      state.userData = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { setUserState, logoutState } = userSlice.actions;
export default userSlice.reducer;
