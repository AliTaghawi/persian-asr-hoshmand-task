const { createSlice } = require("@reduxjs/toolkit");

import { filterUsers, sortUsers } from "@utils/helper";
import { setSearchText } from "../searchText/searchSlice";

const initialState = {
  initialData: [],
  sortBy: "",
  revers: false,
  displayData: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.initialData = action.payload;
    },
    setSortBy: (state, action) => {
      if (state.sortBy === action.payload) {
        state.revers = true;
      } else {
        state.sortBy = action.payload;
        state.revers = false;
      }
      if (!state.displayData.length) state.displayData = [...state.initialData];
      sortUsers(state)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSearchText, (state, action) => {
      if (!action.payload) state.displayData = [...state.initialData];
      filterUsers(state, action.payload.toLowerCase())
    });
  },
});

export default userDataSlice.reducer;
export const { setInitialData, setSortBy } = userDataSlice.actions;
