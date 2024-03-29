import { FaTimes } from 'react-icons/fa'
import {Link, BrowserRouter as Router, Route, Routes, 
        generatePath,
        useNavigate,
        useParams } from 'react-router-dom'

import { useState } from "react";

const Item = ({item, onDelete, onUpdate, onDetails, showAddTask}) => {

  const [id, setId] = useState();

  let navigate = useNavigate();



  return (
    
    <div className='task'  onDoubleClick={ ()=>onDetails(item.id)}  >
      <h3>
        {item.name}  
        <div>
        <button onClick={()=>{navigate('/itemDetails', {replace:true, state:{item: item, showAddTask: showAddTask}})}}>Details</button> 
        <button onClick={()=>{navigate('/editItem', {replace:true, state:{item: item, showAddTask: showAddTask}})}}>Edit</button> 
        <FaTimes style={{ color: 'red', cursor: 'pointer'}}  onClick={ ()=>onDelete(item.id)} />'
        </div>
      </h3>
      <p>{item.description}</p>
     </div> 
     
  
  )
}

export default Item

