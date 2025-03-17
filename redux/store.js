import { configureStore } from "@reduxjs/toolkit";

import userData from './features/userData/userDataSlice'
import modalInfo from "./features/modalInfo/modalInfoSlice"

const store = configureStore({
  reducer: {
    userData,
    modalInfo
  }
})

export default store