import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./js/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
