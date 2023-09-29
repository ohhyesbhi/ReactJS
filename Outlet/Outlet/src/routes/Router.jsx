
import {Routes,Route} from "react-router-dom"
import AuthRoute from "./AuthRoute"

function Router() {
  return (
<>
 <Routes>
   <Route element={<AuthRoute arr={["engineer"]}/>}>
     <Route path = "/engineer" element={<div>Dashboard</div>}/>
   </Route>
   <Route path="/" element={<div>Home</div>}/>
 </Routes>
</>
  )
}

export default Router
