import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

counterIndicator.propTypes = {
  counter: PropTypes.number.isRequired,
  className: PropTypes.string
};

counterIndicator.defaultProps = {
  className: ""
};

function counterIndicator({ className, counter, ...restProps }) {
  const classes = [styles.counterIndicator, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      <h1>{counter}</h1>
    </div>
  );
}

export default counterIndicator;
