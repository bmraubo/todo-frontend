import ReactDOM from "react-dom";
import App from "./App"
import Connector from "./connector/connector"
import TestConnector from "./connector/test-connector";

const connector = Connector

ReactDOM.render(<App connector={connector}/>, document.getElementById("root"));
