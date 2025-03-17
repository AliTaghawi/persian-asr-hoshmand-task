const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  initialData: [],
  sortBy: "",
}

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers : {
    setInitialData: (state, action) => {
      if(action.type === "setData") state.initialData = action.payload
    },
    setSortBy: (state, action) => {
      if (action.type === "setSort") {
        state.sortBy = action.payload
      }
    }
  }
})

export default userDataSlice.reducer;
export const {setInitialData, setSortBy} = userDataSlice.actions