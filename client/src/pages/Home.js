import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="App">
      <h1>Select your name from the dropdown box to sign in</h1>
      <Dropdown />
    </div>
  );
};

export default Home;
