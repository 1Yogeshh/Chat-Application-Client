import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    const { profile, profileLoaded } = useSelector((s) => s.user)

    if (token && !profileLoaded) {
        return null; 
    }

    if (token && profile) {
        return <Navigate to="/chat" replace />;
    }

    if (token && !profile) {
        return <Navigate to="/create-user" replace />;
    }
    
    return children;
};

export default GuestGuard;
