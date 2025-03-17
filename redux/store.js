import { configureStore } from "@reduxjs/toolkit";

import searchText from './features/searchText/searchSlice'
import userData from './features/userData/userDataSlice'
import modalInfo from "./features/modalInfo/modalInfoSlice"

const store = configureStore({
  reducer: {
    searchText,
    userData,
    modalInfo
  }
})

export default store