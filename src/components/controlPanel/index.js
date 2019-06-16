import React from "react";
import Control from "./control";

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
