import { Navigate } from "react-router-dom"


export default function PrivetRoute(isAllowed,pathName,children) {
    if(!isAllowed) return  <Navigate to={pathName}/>
     return children
    
}