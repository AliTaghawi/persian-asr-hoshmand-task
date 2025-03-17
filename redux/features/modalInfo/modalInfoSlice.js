const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  status: false,
  type: "",
}

const modalInfoSlice = createSlice({
  name: "modalInfo",
  initialState,
  reducers: {
    openClose: (state, action) => {
      state.status = !state.status
      if (state.status) state.type = action.payload
    },
  }
})

export default modalInfoSlice.reducer
export const {openClose} = modalInfoSlice.actions
export const checkOpen = store => store.modalInfo.status