import counterSlice from '@/app/counter/counterSlice';
import userSlice from '@/app/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';

// create store
const store = configureStore({
  reducer: {
    countStore: counterSlice,
    userStore: userSlice,
  },
  devTools: true,
});

// export the store
export default store;
