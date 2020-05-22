import React from 'react';

class Location extends React.Component {
    render() {
      return (
            <div className="location-section">
                <div className="arch">
                <img className="arch-image" src={require("../images/arch.jpg")} />
                </div>
                <div className="location-info">
                    <h1>WHERE ARE WE LOCATED?</h1>
                    <h2>Brunelle's bio lab is located in St. Louis, MO, and is the only location where our services
                        are available.
                    </h2>
                </div>
            </div>
      );
    }
  }

export default Location;