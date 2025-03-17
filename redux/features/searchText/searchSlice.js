import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: ""
}

const searchSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    setSearchText: (state, actions) => {
      state.text = actions.payload
    }
  }
})

export default searchSlice.reducer
export const  {setSearchText} = searchSlice.actions
export const searchTextValue = (store) => store.searchText.text 