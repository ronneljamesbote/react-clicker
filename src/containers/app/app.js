import React, { Component } from "react";
import Header from "../../components/header";
import Clicker from "../clicker";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Clicker />
      </React.Fragment>
    );
  }
}

export default App;
