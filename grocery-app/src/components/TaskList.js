import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const url = "https://todo-appu.herokuapp.com/tasks";

class TaskList extends React.Component {
  state = { tasks: [] };

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
    const deleteTask = () => {
      alert('Tarea eliminada');
    }
    const taskChecked = () => {
      alert("Tarea acabada");
    };
    const updateTask = () => {
      alert("Tarea actualizada");
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
                  ></input>
                </form>
                <h3>{tarea.tarea}</h3>
                <div>
                  
                    
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="item-options trash"
                        onClick={deleteTask}
                      />
                    
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="item-options edit"
                      onClick={updateTask}
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
