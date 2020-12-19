import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Options = () => {


  return (
    <footer className="options">
      <Router>
        <Link to="/new-item">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="plus"
        />
  </Link>
      <Switch>
      <Route
       exact path="/new-item" render={
        (props) => {
          return(
            <div className="list-item"> 
            <div className="item-elements">
              <form type="submit">
                <input type="text" placeholder="Item Name"></input>
                
                <button>
                  Add 
                </button>
                
              </form>
            </div>
            
            </div>
          );
      }
      } />
      
      </Switch>
      </Router>
    </footer>
  );
};

export default Options;
