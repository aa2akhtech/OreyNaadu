import Content from "./Content";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const LandingPage = () => (
    <Content />
);

LandingPage.propTypes = {
  children: PropTypes.node,
};

LandingPage.defaultProps = {
  children: null,
};

export default LandingPage;
