
import {Outlet} from "react-router-dom"

function AuthRoute({arr}) {
    const role = "engineer";
  return (
    <>
    {
    arr.find((userRole)=>userRole == role) ? <Outlet/> : <div>denied</div>
    }
    </>
  )
}

export default AuthRoute
