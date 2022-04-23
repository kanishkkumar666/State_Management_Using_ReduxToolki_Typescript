import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { First, Second, Form } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Getting Data State and Displaying It Using Redux</h1>
        <br />
        {/* <First /> */}
        <br />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Second />} />
            <Route path="/first" element={<First />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
