import './bootstrap.min.css'
import React from "react";

import TaskList from './components/TaskList';
import Options from "./components/Options";

function App() {
  return (
    <>
      <header className="text-white bg-primary p-4">
        <h1 className="navbar-brand">Grocery Budget Application</h1>
      </header>

      <TaskList />
      <Options />
    </>
  );
}

export default App;
