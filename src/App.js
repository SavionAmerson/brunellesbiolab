import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Supportbar from "./components/supportbar";
import HomeIMG from "./components/home-image";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Supportbar /> */}
      <HomeIMG />
    </div>
  );
}

export default App;
