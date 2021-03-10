import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);

    console.log(task);
  };
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id != id;
      })
    );
  };

  const toggleReminder = (id) => {
    console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
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
