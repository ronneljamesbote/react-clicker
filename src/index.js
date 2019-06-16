import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout";
import App from "./containers/app";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById("root")
);

registerServiceWorker();
