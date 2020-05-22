import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import HomeIMG from "./components/home-image";
import Topics from "./components/topic-section";
import ExtraInfo from "./components/extra-info";
import Location from "./components/location";
import BookNow from "./components/book-now";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeIMG />
      <Topics />
      <ExtraInfo />
      <Location />
      <BookNow />
      <Footer />
    </div>
  );
}

export default App;
