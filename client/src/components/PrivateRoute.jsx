import { Navigate, Outlet, useNavigate } from "react-router-dom";

export function PrivateRoute(){
    const token = localStorage.getItem('token');
    if(token){
        return (
            <Outlet></Outlet>
        )
    }
    else{
        return (
            <Navigate to={"/"}></Navigate>
        )
    }
}