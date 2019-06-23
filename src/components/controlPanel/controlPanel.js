import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import Control from "./control";

controlPanel.propTypes = exact({
  controls: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      handler: PropTypes.func
    }).isRequired
  ).isRequired
});

function controlPanel({ controls }) {
  return (
    <React.Fragment>
      {controls.map((control) => {
        const { type, handler } = control;
        return <Control key={type} onClick={handler} type={type} />;
      })}
    </React.Fragment>
  );
}

export default controlPanel;
