/* eslint-disable no-undef */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface UserData {
  display_name: string;
  external_urls: unknown;
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images?: { height: null; url: string; width: null }[];
  type: string;
  uri: string;
}

interface UserState {
  value: UserData;
  // value: object,
}

const initialState: UserState = {
  value: {} as UserData,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, action: PayloadAction<UserData>) => {
      state.value = action.payload;
    },
  },
});

export const { storeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
