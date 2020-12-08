import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

class Options extends React.Component{
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
constructor(props){
  super(props)
  this.state = {clicked: 'dsadsa'};
}

componentDidMount(){
  this.setState({clicked: 'Componente montado'});
}

render(){
  return (
    <footer className="options">
      {this.state.clicked}
      <button className="btn-post">
      <FontAwesomeIcon icon={faPlusSquare} className="plus" />
      
      </button>
    </footer>
  );
  }
};

export default Options;
