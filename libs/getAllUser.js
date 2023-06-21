import axios from 'axios';

export default async function getAllUser() {
  const response = await axios.get(`http://localhost:3000/api/user`);

  if (!response.data) throw new Error('User not found');

  return response.data.userData;
}
