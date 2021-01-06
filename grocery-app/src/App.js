import "./App.css";
import './bootstrap.min.css'
import React from "react";

import Header from './components/Header';
import TaskList from './components/TaskList';
import Options from "./components/Options";

function App() {
  return (
    <main className="main">
  <Header />
  <TaskList />
  <Options />
    </main>
  );
}

export default App;
