import React from "react";
import styles from "./styles.module.scss";

function counterIndicator({ className = "", counter = 0, ...restProps }) {
  const classes = [styles.counterIndicator, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      <h1>{counter}</h1>
    </div>
  );
}

export default counterIndicator;
