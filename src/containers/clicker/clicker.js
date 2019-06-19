import React, { Component } from "react";
import ControlPanel from "../../components/controlPanel";
import CounterIndicator from "../../components/counterIndicator";
import styles from "./styles.module.scss";

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      controls: [
        { type: "decrement", handler: this.handleDecrementCounter },
        { type: "reset", handler: this.handleResetCounter },
        { type: "increment", handler: this.handleIncrementCounter }
      ]
    };
  }

  handleDecrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  handleIncrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  handleResetCounter = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter, controls } = this.state;

    return (
      <div className={styles.clicker}>
        <div className={styles.content}>
          <CounterIndicator counter={counter} />
          <ControlPanel controls={controls} />
        </div>
      </div>
    );
  }
}

export default Clicker;
