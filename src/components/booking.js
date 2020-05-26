import React from 'react';

class Booking extends React.Component {

    render() {

      return (
            <div className="booking-section">
              {this.state.on ||
                <div className="booking">
                    <div className="booking-info">
                    <h1>TOUR BOOKING</h1>
                    <form className="appointment-info">
                    <label>What is your name?</label>
                    <input type="text" className="userName" id="userName" placeholder="Name" />
                    <label>What is your email address?</label>
                    <input type="text" className="userEmail" id="userEmail" placeholder="Email" />
                    <label>What is your moblie phone number?</label>
                    <input type="tel" className="userPhone" id="userPhone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    <label>How many people (including yourself) will be on this tour?</label>
                    <input type="number" className="attendees" id="attendees" placeholder="Max. 15" min="1" max="15" />
                    <label> What day and what time?</label>
                    <div className="date-and-time">
                    {/* <label>What day would you like to take your tour?</label> */}
                    <input type="date" className="tour-date" id="tour-date" placeholder="" />
                    {/* <label>What time? (HR:MN AM/PM)</label> */}
                    <input type="time" className="tour-time" id="tour-time" placeholder="" />
                    </div>
                    </form>
                    <h1>Cost for this tour: $[price]</h1>
                    <button onClick={this.appointmentInfo} type="button" className="book-button">BOOK TOUR</button>
                    </div>
                </div>
                }

                <div>
                  {this.state.on && 
                  <div className="thank-you-section">
                    <div className="thank-you">
                        <h1>Thank you [name]! Your your has been schedualed for [time] on [date]!</h1>
                        <h2>A receipt will be sent to your email shortly!</h2>
                    </div>
                    </div>
                  }
                </div>
            </div>
      );
    }

    state= {
      on: false
    }  

    toggle = () => {
      this.setState({
        on: !this.state.on
      })
    }

    appointmentInfo(name, email, phone, attendees, date, time) {
      // document.getElementById("book-button").onClick("this.toggle");
      name = document.getElementById('userName').value;
      email = document.getElementById('userEmail').value;
      phone = document.getElementById('userPhone').value;
      attendees = document.getElementById('attendees').value;
      date = document.getElementById('tour-date').value;
      time = document.getElementById('tour-time').value;
      console.log(name, email, phone, attendees, date, time);
    }
  }

export default Booking;