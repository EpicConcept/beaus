import React from "react";

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="copyright container">
        <hr />
        <ul id="menu-copyright" className="menu">
          <li className="menu-item menu-privacy-policy">
            <a href="https://beaus.ca/privacy-policy/">Privacy Policy</a>
          </li>
          <li className="menu-item menu-contact-us">
            <a href="https://beaus.ca/contact-us/">Contact Us</a>
          </li>
        </ul>
        <span>© Beau's All Natural Brewing Company 2018</span>
      </div>
    </footer>
  );
};

export default footer;
