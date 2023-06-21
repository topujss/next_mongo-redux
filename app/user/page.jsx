'use client'; // Never use async await when in client component
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, fetchAllUser } from './userApi';

export default function User() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: '',
    email: '',
    username: '',
    gender: '',
    age: 0,
  });

  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);

  function handleInputChange(e) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createUser(input));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" value={input.name} onChange={handleInputChange} />
        <br />
        <input type="text" placeholder="email" name="email" value={input.email} onChange={handleInputChange} />
        <br />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />
        <br />
        <input type="text" placeholder="gender" name="gender" value={input.gender} onChange={handleInputChange} />
        <input type="text" placeholder="age" name="age" value={input.age} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
