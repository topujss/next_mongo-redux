import { createSlice } from '@reduxjs/toolkit';

// create a counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { type, payload }) => {
      state.count++;
    },
    decrement: (state, { type, payload }) => {
      state.count--;
    },
  },
});

// export selectors
export const selectCount = (state) => state.countStore;

// export actions
export const { increment, decrement } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;
