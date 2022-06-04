import React from "react";
// import PropTypes from 'prop-types'

const AppFooter = () => (
    <footer id="footer">
        <div className="footer-container">
        <div className="footer-left">
          <h2>ஒரே நாடு | OREY NAADU</h2>
          <p>
            ஒரே நாடு - தமிழக பாரதிய ஜனதா கட்சியின் அதிகாரப்பூர்வ பத்திரிக்கை
          </p>
        </div>

        <div className="footer-right">
          <h2>Newsletter</h2>
          <p>
            Get the latest news, hot topic notifications, and exclusive gifts
            conveniently in your inbox!
          </p>

          <div>
            <input type="text" placeholder="Email Address" />
            <i className="fas fa-envelope"></i>
          </div>
        </div>
      </div>

      <p>
        created by&nbsp;<b>LOGIN</b>
      </p>
    </footer>

);

AppFooter.propTypes = {};

export default AppFooter;
