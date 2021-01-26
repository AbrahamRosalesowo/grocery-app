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
        <div className="card text-center d-flex  align-items-center">
          <h3 className="m-4">Remaining Items: {this.state.tasks.length}</h3>
          {this.state.tasks.map((tarea) => (
            <div className="card text-white bg-primary mb-2 p-3" style={{width:'500px'}} key={tarea._id}>
              <div className="container-sm" >
                <div className="row">

                  <form className="col">
                    <input
                      type="checkbox"
                      className="checkbox" onClick={taskChecked}
                      checked={this.state.tasks.tarea}
                    ></input>
                  </form>

                  <h5 className="col-9 text-center">{tarea.tarea}</h5>
                  <button type="button"
                    className="col btn btn-danger"
                    style={{ width: "10px" }}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      id={tarea._id}
                    />
                  </button>
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
