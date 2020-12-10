import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Options = () => {
  /*const createTask = () => {
    axios
      .get("https://todo-appu.herokuapp.com/tasks/:id")
      .then((res) => {
        const tasks = res.data.tasks;
        const id = res.data.tasks.tarea.id;
      })
      .catch((err) => {
        console.log(err);
      });
  };
*/

  function createTask() {
    alert("Crear tarea");
  }

  return (
    <footer className="options">
      <button className="btn-post">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="plus"
          onClick={createTask}
        />
      </button>
    </footer>
  );
};

export default Options;
