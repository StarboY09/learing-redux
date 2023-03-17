import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/index.js";
import React from "react";

function Countertoolkit() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter App</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch(actions.INC());
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          dispatch(actions.DEC());
        }}
      >
        decrease
      </button>
      <button
        onClick={() => {
          dispatch(actions.ADD(10));
        }}
      >
        Add 10
      </button>
    </div>
  );
}

export default Countertoolkit;
