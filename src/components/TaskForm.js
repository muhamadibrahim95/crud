import React,{useContext, useState, useEffect} from 'react';
import {TaskListContext} from "../context/TaskListContext"

function TaskForm() {
    const {addTask, clearList,editItem, editTask} = useContext(TaskListContext);

    const [title, setTitle] = useState("");

    const handleChange = (e) => {
       setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle("");
        } else {
            editTask(title,editItem.id);
            setTitle("");
        }
       
    }
   
   useEffect(() =>{
      if(editItem){
          setTitle(editItem.title);
      }

   },[editItem])

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={title} className="task-input" placeholder="Add Tasks.." required/>
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">{editItem ? 'Edit Item' : 'Add Task'}</button>
                    <button type="button" onClick={clearList} className="btn clear-btn">Clear</button>
                </div>

            </form>
        </div>
    )
}

export default TaskForm
