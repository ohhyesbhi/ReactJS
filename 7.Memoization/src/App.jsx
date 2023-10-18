import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {

  const [todos,setTodos] = useState([
    {name:"abhishek"},
    {name:"bee"},
    {name:"vishnu"},
    {name:"jaffar"}
  ]
  )

  const [add,setAdd] = useState(0);
  const [sub,setSub] = useState(100)

  // Here you cans ee whenever we click on add or substract then you can see that child component is re-rendering again and again
  // even if there are no updates in props so for it not re-render again and again we have to do memoization

  // now suppose you introduced the function render
  // and now you can see again the same problem of child re-rendering again after we click on add button any it don't have any connection
  // but still it is re-rendering that is because whenever our page starts re-rendering the functions are recreated again and now we can the render
  // function will be recreated again so now for child component it thinks that in function something has been changed

  const render = () =>{
    // simple operations are done
  }
          
 return(
  <>
    <Todo todos={todos} render={render}/>

    <button onClick={()=>setAdd(add+1)}>Add</button>      <span>{add}</span>
    <br/>
    <button onClick={()=>setSub(sub-1)}>Sub</button>       <span>{sub}</span>
  </>
 )
}

export default App
