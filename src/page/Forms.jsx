import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { name_action } from "../redux";

const Forms = () => {
  const name_ = useSelector((state) => state.name_);
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const handleevent = (e) => {
    console.log(e.target.value);
    setname(e.target.value);
    dispatch(name_action.add_name(name));
  };
  const submit = (e) => {
    e.preventDefault();
    console.log("the name is ");
    console.log(name_);
  };
  return (
    <>
      <h1>my name is </h1>
      <h1>{name_}</h1>
      <form onSubmit={submit}>
        <label>Enter your name</label>
        <input type={"text"} value={name} onChange={handleevent} />
      </form>
    </>
  );
};

export default Forms;
