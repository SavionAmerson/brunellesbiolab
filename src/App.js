import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Supportbar from "./components/supportbar";
import HomeIMG from "./components/home-image";
import Topics from "./components/topic-section";
import ExtraInfo from "./components/extra-info";
import Location from "./components/location";
import BookNow from "./components/book-now";
import Footer from "./components/footer";
import Booking from "./components/booking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Route path="/" exact component={Supportbar} />
          <Route path="/" exact component={HomeIMG} />
          <Route path="/" exact component={Topics} />
          <Route path="/" exact component={ExtraInfo} />
          <Route path="/" exact component={Location} />
          <Route path="/" exact component={BookNow} />
          <Switch>
            <Route path="/booking" exact component={Booking} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
