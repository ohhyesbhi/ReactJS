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
          
 return(
  <>
    <Todo todos={todos}/>

    <button onClick={()=>setAdd(add+1)}>Add</button>      <span>{add}</span>
    <br/>
    <button onClick={()=>setSub(sub-1)}>Sub</button>       <span>{sub}</span>
  </>
 )
}

export default App
