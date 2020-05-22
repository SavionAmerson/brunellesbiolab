import React from 'react';

class Topics extends React.Component {
    render() {
      return (
            <div className="topic-section">
              <h1>WHAT DO WE DO AT THIS LAB?</h1>
              <div className="topic-holder">
                <div className="dna">
                  <h1>DNA MANIPULATION</h1>
                  <img className="dna-graphic" src={require("../images/DNA.png")} />
                  <h2>You'll get to see how we maniupulate genetic material to create and modify
                    lifeforms!
                  </h2>
                </div>
                <div className="bacteria">
                <h1>BACTERIA</h1>
                <img className="bacteria-graphic" src={require("../images/Bacteria.png")} />
                <h2>You'll get to observe different a bunch types of bacteria under a microscope!</h2>
                </div>
                <div className="cryogenics">
                <h1>CRYOGENICS</h1>
                <img className="ice-graphic" src={require("../images/Ice cube.png")} />
                <h2>You'll get to learn about perserving frozen organs (and see them too)!</h2>
                </div>
              </div>
            </div>
      );
    }
  }

export default Topics;