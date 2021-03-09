import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hello",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "World",
      day: "Monday",
      reminder: true,
    },
    ,
    {
      id: 3,
      text: "Hello",
      day: "Monday",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id != id;
      })
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <Button color="green" text="Add"></Button>

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
      ) : (
        "No Tasks Added "
      )}
    </div>
  );
}

export default App;

/*
import React from "react";
class App extends React.Component{
  render(){
    return <h1> Hello </h1>
  }
}

*/
