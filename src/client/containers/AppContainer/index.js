import LandingPage from "../LandingPage";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const AppContainer = () => <LandingPage />;

AppContainer.propTypes = {
  store: PropTypes.object,
};

export { AppContainer as default };
