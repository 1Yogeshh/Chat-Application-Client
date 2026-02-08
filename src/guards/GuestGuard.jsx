import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    const { profile, profileLoaded } = useSelector((s) => s.user)

    // ⏳ profile abhi load ho rahi hai
    if (token && !profileLoaded) {
        return null; // ya loader
    }

    if (token) {
        return <Navigate to="/create-user" replace />;
    }

    // ✅ logged in + profile missing → create-user
    if (token && !profile) {
        return <Navigate to="/create-user" replace />;
    }

    return children;
};

export default GuestGuard;
