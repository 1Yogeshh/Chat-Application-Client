import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    const location = useLocation();
    const { profile, profileLoaded } = useSelector((s) => s.user);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (token && !profileLoaded) {
        return null;
    }

    if (token && profile && location.pathname !== "/chat") {
        return <Navigate to="/chat" replace />;
    }

    return children;
};

export default AuthGuard;
