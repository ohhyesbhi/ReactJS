import React, { useState } from 'react';
import {showSucess} from "../showtoasts/Toasts";



import "./InputItem.css";

function Inputitem({addItem}) {

  const [text,setText] = useState("");


  return (
    <>
    <div className='itemInputWrapper'>
        
        <input
         className='input'
         type='text'
         value={text}
         onChange={(e)=>setText(e.target.value)}
         placeholder='Add An Item...'
        />
        <button className='addBtn' onClick={()=>{
          addItem(text);
          setText("");
          showSucess("added successfully");
        }}>Add</button>

    </div>
    </>
  )
}

export default Inputitem
