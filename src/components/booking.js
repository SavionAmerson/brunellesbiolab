import React from 'react';

class Booking extends React.Component {
    render() {
      return (
            <div className="booking-section">
                <div className="booking">
                    <div className="booking-info">
                    <h1>TOUR BOOKING</h1>
                    <form className="appointment-info">
                    <label>What is your name?</label>
                    <input type="text" className="" id="" placeholder="Name" />
                    <label>What is your email address?</label>
                    <input type="email" className="" id="" placeholder="Email" />
                    <label>What is your moblie phone number?</label>
                    <input type="tel" className="" id="" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <label>How many people (including yourself) will be on this tour?</label>
                    <input type="number" className="" placeholder="Max. 15" min="1" max="15" />
                    <label>What day would you like to take your tour?</label>
                    <input type="date" className="" id="" placeholder="" />
                    <label>What time? (HR:MN AM/PM)</label>
                    <input type="time" className="" id="" placeholder="" />
                    </form>
                    <button className="book-button">BOOK TOUR</button>
                    </div>
                </div>
            </div>
      );
    }
  }

export default Booking;