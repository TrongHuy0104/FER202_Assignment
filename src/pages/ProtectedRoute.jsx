import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useSelector((store) => store.users);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) navigate("/");
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
