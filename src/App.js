import React from "react";
import { useState } from "react";
import './App.css';




function App(){
  
  const [task, setTask] = useState("")
  const [addTask, setaddTask] = useState([])

  function addItems(e){
    e.preventDefault()

    setaddTask(newTask => {
      return
        [...addTask,[setTask]]
    })
  }

  return(
    <>   
    {/* <form className="todo-list" onSubmit={addItems}> */}
      <div className="top">
        <h1>TODO LIST</h1>
        <input type="text" 
          value={task}
          onChange={e => setTask(e.target.value)} 
          placeholder="Add a task" className="text"/>
        <button>Add Task</button>
      </div>
      <div className="bottom">
        <div className="tasks">
          <div className="task-items">
            <input type="checkbox" name="" id="" className="check"/>
            <p>Task 1</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
    </form>
    </> 
  );
};

export default App