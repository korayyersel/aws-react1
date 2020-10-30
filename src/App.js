import React from "react";

import { withAuthenticator } from "@aws-amplify/ui-react";

import { Auth, Hub } from 'aws-amplify'

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <button onClick={checkUser}>Check User</button>
    </header>
    </div>
  );
}

export default withAuthenticator(App);