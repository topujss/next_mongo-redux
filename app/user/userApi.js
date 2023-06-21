import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// get all user data
export const fetchAllUser = createAsyncThunk('user/fetchAllUser', async () => {
  const response = await axios.get(`http://localhost:3000/api/user`);

  if (!response.data) throw new Error('User not found');

  return response.data.userData;
});

/**
 * Create user
 * @req POST /api/user
 */
export const createUser = createAsyncThunk('user/createUser', async (data) => {
  const response = await axios.post(`http://localhost:3000/api/user`, data);

  console.log(response.data);

  return response.data.userData;
});
