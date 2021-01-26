import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewItem from "./NewItem";

const Options = () => {
  return (
    <footer className="options">
      <Router>
        <Link to="/new-item">
        <div className="text-center m-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
        </div>
        </Link>
        <Switch>
          <Route exact path="/new-item" render={NewItem} />
        </Switch>
      </Router>
    </footer>
  );
};

export default Options;
