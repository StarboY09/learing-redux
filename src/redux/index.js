import { configureStore, createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name_",
  initialState: { name_: "test" },
  reducers: {
    add_name(state, action) {
      state.name_ = action.payload;
    },
  },
});
export const name_action = nameSlice.actions;

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    INC(state, action) {
      state.counter += 1;
    },
    DEC(state, action) {
      state.counter -= 1;
    },
    ADD(state, action) {
      state.counter += action.payload;
    },
  },
});
export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
  reducer_name: nameSlice.reducer,
});
export default store;
