import { configureStore } from "@reduxjs/toolkit";

import searchSlice from './features/searchText/searchSlice'

const store = configureStore({
  reducer: {
    searchText : searchSlice
  }
})

export default store