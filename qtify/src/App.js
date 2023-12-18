import React from "react";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import QLogo from "./components/QLogo/QLogo";
import "./App.css";

function App() {
  return (
    <>
    <header>
    <QLogo/>
    <Search placeholder={"Search a album of your choice"}/>
    <Button>Give Feedback</Button>
    </header>
    </>
    );
}

export default App;
