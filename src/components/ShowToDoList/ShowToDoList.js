import React from 'react'
import './ShowToDoList.css'
import { useSelector,useDispatch } from 'react-redux'
import {removeTask,updateTask} from '../Slice/Slice'
import edit from '../../assets/edit.png'
import remove from '../../assets/delete.png'





const ShowToDoList = () => {
    const  todo = useSelector(state=>state.todo)
    const dispatch = useDispatch()
  return (
    <div className="task-container">
      {
        todo.map((value,index)=>(
            <div className="indivisual" key={index}> 
                <span>{index+1}. {value}</span>
                <div className="symbols">
                  <img src={edit} alt="" onClick={()=>{dispatch(updateTask(index))}}/>
                  <img src={remove} alt="" onClick={()=>dispatch(removeTask(index))}/>
                
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ShowToDoList
