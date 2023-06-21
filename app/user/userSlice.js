import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUser } from './userApi';

// create slice for user
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    msg: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// export selectors
export const selectUser = (state) => state.userStore;

// export actions
export const {} = userSlice.actions;

// export reducer
export default userSlice.reducer;
