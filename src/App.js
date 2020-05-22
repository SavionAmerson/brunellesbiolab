import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import HomeIMG from "./components/home-image";
import Topics from "./components/topic-section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeIMG />
      <Topics />
    </div>
  );
}

export default App;
