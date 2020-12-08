import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class TaskList extends React.Component {
  state = { tasks: [] };

  componentDidMount() {
    axios
      .get("https://todo-appu.herokuapp.com/tasks")
      .then((response) => {
        const tasks = response.data.tasks;
        this.setState({ tasks });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="content">
    <h2 className="tab">Items: { this.state.tasks.length }</h2>
          {this.state.tasks.map((tarea) => (
            <div className="list-item" key={tarea._id} >
              <div className="item-elements">
                <form>
                  <input type="checkbox" className="checkbox"></input>
                </form>
                <h3>{tarea.tarea}</h3>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="item-options trash"
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="item-options edit"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;
