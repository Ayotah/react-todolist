import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function ToDoList() {
  const [tasks,setTasks]=useState(['Eat rice','buy food','drink jus']);

 const [newTask,setNewTask ]=useState("");

 function handleInputChange(event){
   setNewTask(event.target.value)

 }
function addTask(){
  if(newTask.trim !==''){

  setTasks(t=>[...t,newTask]);
  setNewTask("");
  }

}
 
function deleteTask(index){
const updatedTasks = tasks.filter((_,i) =>i!==index);
setTasks(updatedTasks);
}

// function moveTaskUp(index){

// }

// function moveTaskDown(index){

// }
  return (
  <div className="container mt-5">
  <div className="card shadow">
    <div className="card-body">
      <h2 className="card-title text-center mb-4">📝 My To-Do List</h2>

      {/* Input + Add Button */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn btn-success btn-lg" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Tasks List */}
      {tasks.length === 0 ? (
        <p className="text-muted text-center">No tasks yet. Add one above! 🌟</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{task}</span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteTask(index)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</div>



  );
};


export default  ToDoList;