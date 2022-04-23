import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";
import { Button } from "antd";

const First = () => {
  const value1 = useSelector((state: RootState) => state?.Value1?.value1);

  return (
    <React.Fragment>
      <h1>First Component</h1>
      <br />
      <h3> Value1:- {value1}</h3>
      <br />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </React.Fragment>
  );
};

export default First;
