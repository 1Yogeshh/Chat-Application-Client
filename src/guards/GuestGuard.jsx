import { Navigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
        return <Navigate to="/create-user" replace />;
    }

    return children;
};

export default GuestGuard;
