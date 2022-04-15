import "./config/firebase";
import "./config/moment";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CoreProvider } from "./hooks/useCore";
import { ModalProvider } from "./hooks/useModal";

ReactDOM.render(
  <React.StrictMode>
    <CoreProvider>
      <ModalProvider>
        <Router>
          <App />
        </Router>
      </ModalProvider>
    </CoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
