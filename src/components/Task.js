import React,{useContext} from 'react'
import {TaskListContext} from "../context/TaskListContext";

function Task({task}) {
    const {removeTask, findItem} = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button onClick={() => findItem(task.id)}className="btn-edit task-btn">Edit</button>
                <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">Delete</button>
            </div>
        </li>
    )
}

export default Task
