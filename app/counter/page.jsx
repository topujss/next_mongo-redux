'use client';

import { useDispatch, useSelector } from 'react-redux';
import './Counter.scss';
import { decrement, increment, selectCount } from './counterSlice';

export default function Counter() {
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </>
  );
}
