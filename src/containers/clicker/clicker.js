import React, { Component } from "react";
import { connect } from "react-redux";
import { appLoad } from "../../actions/app-actions";
import { decrement, increment, reset } from "../../actions/counter-action";
import ControlPanel from "../../components/controlPanel";
import CounterIndicator from "../../components/counterIndicator";
import styles from "./styles.module.scss";

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controls: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      !prevState.controls.length &&
      nextProps.decrementCounter &&
      nextProps.incrementCounter &&
      nextProps.resetCounter
    ) {
      return {
        ...prevState,
        controls: [
          { type: "decrement", handler: nextProps.decrementCounter },
          { type: "reset", handler: nextProps.resetCounter },
          { type: "increment", handler: nextProps.incrementCounter }
        ]
      };
    } else return null;
  }

  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    const { controls } = this.state;
    const { counter } = this.props;

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

const mapStateToProps = ({ App, Counter }, ownProps) => {
  return {
    load: App,
    counter: Counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadApp: () => {
      dispatch(appLoad());
    },
    decrementCounter: () => {
      dispatch(decrement());
    },
    incrementCounter: () => {
      dispatch(increment());
    },
    resetCounter: () => {
      dispatch(reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clicker);
