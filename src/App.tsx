import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { First, Second } from "./components";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      Getting Data state and Displaying It Using Redux
      <br />
      <First />
      <br />
      <Second />
    </React.Fragment>
  );
}

export default App;
