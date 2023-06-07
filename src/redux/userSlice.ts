import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  value: null | userObj;
}
interface userObj {
  email: string | null | undefined;
  uid: string | null | undefined;
  displayName: string | null | undefined;
  photoUrl: string | null | undefined;
}
const initialState: UserState = {
  value: { email: "", uid: "", displayName: "", photoUrl: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    nullUserState: (state) => {
      state.value = null;
    },

    updateUserState: (state, action: PayloadAction<userObj | null>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nullUserState, updateUserState } = userSlice.actions;

export default userSlice.reducer;
