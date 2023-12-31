import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducer/counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          add
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          less
        </button>
      </div>
    </div>
  );
}
