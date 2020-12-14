import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const url = "https://todo-appu.herokuapp.com/tasks";

class TaskList extends React.Component {
  state = {
    tasks: []
  };

  //==============
  // GET REQUEST
  //==============
  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        const tasks = response.data.tasks;
        this.setState({ tasks });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const taskChecked = () => {
      console.log("tarea acabada");
    };
    return (
      <>
        <div className="content">
          <h2 className="tab">Items: {this.state.tasks.length}</h2>
          {this.state.tasks.map((tarea) => (
            <div className="list-item" key={tarea._id}>
              <div className="item-elements">
                <form>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={taskChecked}
                    checked={this.state.tasks.tarea}
                  ></input>
                </form>
                <h3>{tarea.tarea}</h3>

                <FontAwesomeIcon
                  icon={faTrash}
                  className="item-options trash"
                  id={tarea._id}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;
