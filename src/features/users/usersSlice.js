import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Nikolai Georgiev" },
  { id: 2, name: "Niki Piki" },
  { id: 1, name: "Nick Gigi" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
