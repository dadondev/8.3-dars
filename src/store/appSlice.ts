import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    lonLat: [],
  },
  reducers: {
    getError(state) {
      state.isError = true;
    },
    getData(state, { payload }) {
      state.isLoading = true;
      state.data = payload;

      state.isError = false;
      state.isLoading = false;
    },
    getLoad(state) {
      state.isLoading = true;
    },
  },
});

export default appSlice;
