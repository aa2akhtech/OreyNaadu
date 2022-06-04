import React from "react";
// import PropTypes from 'prop-types'

const AppHeader = () => (
    <header id="header">
        <div className="navigation-container">
        <div className="top-head">
          <div className="web-name">
            <img src="images/logo.png" alt="oreynaadu" />
            <span className="brand-name">
              <h1>OREY NAADU</h1>
            </span>
          </div>

          <div className="ham-btn">
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </div>

          <div className="times-btn">
            <span>
              <i className="fas fa-times"></i>
            </span>
          </div>
        </div>

        <div className="nav-bar" id="nav-bar">
          <nav>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">current affairs</a>
              </li>
              <li>
                <a href="#">archive</a>
              </li>
              <li>
                <a href="#">featured</a>
              </li>
              <li>
                <a href="#">broadcast</a>
              </li>
              <li>
                <a href="#">category</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/OreyNaadu" target="blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Oreynaadu_TN" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/OreyNaadu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );

    AppHeader.propTypes = {};
    
    export default AppHeader;
    