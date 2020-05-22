import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-info">
        <h1 className="copyright">© BRUNELLE INC. 2020</h1>
          <ul className="socials">
            <li>
              <img
                className="facebook"
                src={require("../images/facebook.png")}
              />
            </li>
            <li>
              <img
                className="instagram"
                src={require("../images/instagram.png")}
              />
            </li>
            <li>
              <img className="twitter" src={require("../images/twitter.png")} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
