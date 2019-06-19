import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

function control({
  className = "",
  onClick,
  type = "increment",
  ...restProps
}) {
  const classes = [styles.control, className, styles[type]];

  let symbol = "";
  switch (type) {
    case "increment":
      symbol = <FontAwesomeIcon icon={["fas", "plus"]} />;
      break;
    case "decrement":
      symbol = <FontAwesomeIcon icon={["fas", "minus"]} />;
      break;
    case "reset":
      symbol = <FontAwesomeIcon icon={["fas", "sync-alt"]} />;
      break;
    default:
      classes.splice(-1, 1, styles.increment);
      symbol = <FontAwesomeIcon icon={["fas", "plus"]} />;
  }

  return (
    <button className={classes.join(" ")} onClick={onClick} {...restProps}>
      {symbol}
    </button>
  );
}

export default control;
