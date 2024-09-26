import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const count = useSelector((state) => state.count); // lay du lieu ben trong store
  const dispatch = useDispatch();
  //   console.log(count);

  const handleIncrease = () => {
    // ban action len reduces
    dispatch({
      type: "increment",
    });
  };

  const handleDecrease = () => {
    // ban action len reduces
    dispatch({
      type: "decrement",
    });
  };

  const handleReset = () => {
    // ban action len reduces
    dispatch({
      type: "reset",
    });
  };

  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrease}>InCrease</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
