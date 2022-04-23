import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const First = () => {
  const value1 = useSelector((state: RootState) => state?.Value1?.value1);

  return <React.Fragment>Value1:- {value1}</React.Fragment>;
};

export default First;
