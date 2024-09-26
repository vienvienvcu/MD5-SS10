import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { random_action } from "../actions/randomAction.JS";

export default function Random() {
  const random = useSelector((state) => state.random);

  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch(random_action());
  };

  return (
    <>
      <h2>Random:{JSON.stringify(random)}</h2>
      <button onClick={handleRandom}>Random</button>
    </>
  );
}
