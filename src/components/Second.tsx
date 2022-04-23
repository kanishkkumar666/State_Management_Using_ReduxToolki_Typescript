import React from "react";
import { useDispatch } from "react-redux";
import { value1 } from "../features/counter/stateManager";

const Second = () => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(value1(5));
  };
  return (
    <React.Fragment>
      <button type="button" onClick={increase}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default Second;
