import React, { useContext } from "react";
// import PropTypes from 'prop-types'

const CoreAppContext = React.createContext();

export const useCoreAppContext = () => {
  return useContext(CoreAppContext);
};

const CoreAppProvider = (props) => {
  const data = {
    ...props,
  };
  return (
    <CoreAppContext.Provider value={data}>
      {props.children}
    </CoreAppContext.Provider>
  );
};

//CoreAppProvider.defaultProps = {}

//CoreAppProvider.propTypes = {}

export default React.memo(CoreAppProvider);
