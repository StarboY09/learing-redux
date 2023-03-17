import { useSelector, useDispatch } from "react-redux";
import React from "react";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter App</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ADD", payload: 10 });
        }}
      >
        Add 10
      </button>
    </div>
  );
}

export default Counter;
