import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const Options = () => {
  return(
    <footer className="options">
      <FontAwesomeIcon icon={faPlusSquare} className="plus" />
    </footer>
  );
  }
export default Options;