import React from "react";

import ReactDOM from "react-dom";

import { Amplify } from "@aws-amplify/core";

import "@aws-amplify/auth";

import App from "./App";

import credentials from "./aws-exports";

Amplify.configure(credentials);

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")

);