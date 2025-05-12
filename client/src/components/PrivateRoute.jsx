import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { getToken } from "../services/AdminService";

export function PrivateRoute(){
    // every component either it is class or function, it should return UI element 
    const token = getToken();
    if(true){
        // rende the child component
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