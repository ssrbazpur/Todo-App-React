import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

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
        showAdd={showAddTask}
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
