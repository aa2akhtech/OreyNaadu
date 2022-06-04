import Header from "./Header";
import Content from "./Content";
import contactus from "./contactus";
import updatesection from "./updatesection";
import app from "./app";
import Footer from "./footer";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const LandingPage = () => (
  <div id="home">
  <Header />
  <Content />
  <contactus/>
  <updatesection />
  <app />
  <Footer />
</div>
  
);

LandingPage.propTypes = {
  children: PropTypes.node,
};

LandingPage.defaultProps = {
  children: null,
};


export default LandingPage;
