import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    const location = useLocation();
    const { profile, profileLoaded } = useSelector((s) => s.user);

    // ❌ not logged in
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // ⏳ token hai but profile abhi load ho rahi hai
    if (token && !profileLoaded) {
        return null; // or loader
    }

    // ✅ profile exists → always chat
    if (token && profile && location.pathname !== "/chat") {
        return <Navigate to="/chat" replace />;
    }

    // ✅ token hai but profile missing → allow create-user
    return children;
};

export default AuthGuard;
