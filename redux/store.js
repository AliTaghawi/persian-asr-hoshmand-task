import { configureStore } from "@reduxjs/toolkit";

import searchSlice from './features/searchText/searchSlice'
import userData from './features/userData/userDataSlice'

const store = configureStore({
  reducer: {
    searchText : searchSlice,
    userData: userData
  }
})

export default store