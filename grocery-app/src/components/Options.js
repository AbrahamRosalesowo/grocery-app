import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewItem from "./NewItem";

const Options = () => {
  return (
    <footer className="options">
      <Router>
        <Link to="/new-item">
          <FontAwesomeIcon icon={faPlusSquare} className="plus" />
        </Link>
        <Switch>
          <Route exact path="/new-item" render={NewItem} />
        </Switch>
      </Router>
    </footer>
  );
};

export default Options;
