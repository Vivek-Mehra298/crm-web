import { Navigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({children}:any){
    const {user}=useAuthContext();
    return user ? children : <Navigate to="/login" replace />
}
