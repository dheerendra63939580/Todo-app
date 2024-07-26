import React, { useState } from 'react'
import './TaskInput.css'
import { addTask } from '../Slice/Slice'
import { useDispatch } from 'react-redux'
const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    function addChecker() {
        if(task.length>0) {
            dispatch(addTask(task)) // sending entered value to store
            setTask("")// each time when value is send value of task will be empty string
        }
           
    }
  return (
    <div className='input'>
      <h1>todo Input</h1>
      <input type="text" value={task} placeholder='input to add task' onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={addChecker}>click to add task</button>

    </div>
  )
}

export default TaskInput
