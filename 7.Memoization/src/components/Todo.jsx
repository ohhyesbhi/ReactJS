/* eslint-disable react/prop-types */


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

export default Todo;
