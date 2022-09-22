import React from "react";
// import PropTypes from 'prop-types'
import { Routes, Route } from "react-router-dom";
import { appRouterConfig } from "../../../configs/routerConfig";
const Content = (props) => {
  const renderContent = () => {
    return appRouterConfig.map((route, index) => {
      return <Route key={index} path={route.path} element={route.component} />;
    });
  };

  return (
    <div>
      <Routes>{renderContent()}</Routes>
    </div>
  );
};

//Content.defaultProps = {}

//Content.propTypes = {}

export default React.memo(Content);
