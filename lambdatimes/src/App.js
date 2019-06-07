import React from "react";
import Home from "./home";
import PrivateRoute from "./components/authRouter.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Login} />
        <PrivateRoute path="/Home" component={Home} />
      </div>
    </Router>
  );
};

export default App;
