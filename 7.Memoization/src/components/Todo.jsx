/* eslint-disable react/prop-types */
import { memo } from "react";

function Todo({todos}) {
    console.log(todos)
  return (
   <>
     {
        todos.map((items)=>{
            return (
                <div key={items.name}>
                    <p>{items.name}</p>
                </div>
                
            )
        })
     }
   </>
  )
}

export default memo(Todo);
