import { createSlice } from '@reduxjs/toolkit';

// create slice for user
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    msg: '',
  },
  reducers: {},
});

// export selectors
export const selectUser = (state) => state.userStore;

// export actions
export const {} = userSlice.actions;

// export reducer
export default userSlice.reducer;
