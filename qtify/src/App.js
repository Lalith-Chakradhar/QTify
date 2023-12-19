import React from "react";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import QLogo from "./components/QLogo/QLogo";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <>
    <header>
    <QLogo/>
    <Search placeholder={"Search a album of your choice"}/>
    <Button>Give Feedback</Button>
    </header>
    <Hero/>
    </>
    );
}

export default App;
