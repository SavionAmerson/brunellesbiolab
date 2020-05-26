import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        {/* <div className="hamburger">
          <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
          </button>
        </div> */}

        <div className="nav-logo">
          <h1>BRUNELLE'S BIO LAB!</h1>
        </div>

        {/* <div className="collapse">
          <ul className="navbar-links">

            <li className="nav-link ">
              <a href="/">
                Home
              </a>
            </li>

            <li className="nav-link ">
              <a href="/booking">
                Book a tour
              </a>
            </li>
          </ul>
          
          <h1>
              BUILT BY SAVION AMERSON
            </h1>
        </div> */}
      </header>
    );
  }
}

export default Navbar;
