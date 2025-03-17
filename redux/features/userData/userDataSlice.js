const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  initialData: [],
  sortBy: "",
  revers: false,
  displayData: []
}

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers : {
    setInitialData: (state, action) => {
      state.initialData = action.payload
    },
    setSortBy: (state, action) => {
      if (state.sortBy === action.payload) {
        state.revers = true
      } else {
        state.sortBy = action.payload
        state.revers = false
      }
      if (!state.displayData.length) state.displayData = [...state.initialData]
      state.revers ?
      state.displayData.sort((a, b) => b[action.payload] - a[action.payload]) :
      state.displayData.sort((a, b) => a[action.payload] - b[action.payload])
    }
  }
})

export default userDataSlice.reducer;
export const {setInitialData, setSortBy} = userDataSlice.actions