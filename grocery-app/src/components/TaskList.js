import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class TaskList extends React.Component {
  render() {
    return (
      <>
        <h2 className="tab">Shopping list</h2>
        <div className="content">
          <div className="list-item">
            <div className="item-elements">
              <form>
                <input type="checkbox" className="checkbox"></input>
              </form>
              <h3>Pasear al perro que no tengo</h3>
              <div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="item-options trash"
                />
                <FontAwesomeIcon icon={faEdit} className="item-options edit" />
              </div>
            </div>
          </div>    
        </div>
      </>
    );
  }
}

export default TaskList;
