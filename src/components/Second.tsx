import React from "react";
import { useDispatch } from "react-redux";
import { value1 } from "../features/counter/stateManager";
import { Link } from "react-router-dom";

const Second = () => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(value1(5));
  };
  return (
    <React.Fragment>
      <h1>Second Component</h1>
      <br />
      <Link to="/first">Click To First Component</Link>
      <button type="button" onClick={increase}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default Second;
