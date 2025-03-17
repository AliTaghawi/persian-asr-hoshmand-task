const { createSlice } = require("@reduxjs/toolkit");

import { filterUsers, sortUsers } from "@utils/helper";

const initialState = {
  usersData: [],
  searchText: "",
  sortBy: "",
  revers: false,
  displayData: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    setSortBy: (state, action) => {
      if (state.sortBy === action.payload) {
        state.revers = !state.revers;
      } else {
        state.sortBy = action.payload;
        state.revers = false;
      }
      if (!state.displayData.length) state.displayData = [...state.usersData];
      sortUsers(state)
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
      filterUsers(state, action.payload)
    },
    editUser: (state, action) => {
      const userIndex = state.usersData.findIndex(user => user.id == action.payload.id)
      state.usersData[userIndex] = action.payload
      filterUsers(state, state.searchText)
      if (state.sortBy) sortUsers(state)
    }, 
    addUser: (state, action) => {
      state.usersData.push(action.payload)
      filterUsers(state, state.searchText)
      if (state.sortBy) sortUsers(state)
    }
  },
});

export default userDataSlice.reducer;
export const { setUsersData, setSortBy, setSearchText, editUser, addUser } = userDataSlice.actions;
export const selectDisplay = (store) => store.userData.displayData
export const usersData = store => store.userData.usersData
export const searchTextValue = (store) => store.userData.searchText 