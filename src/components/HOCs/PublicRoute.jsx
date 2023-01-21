import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import { Navigate } from "react-router-dom";


const PublicRoute = ({children, restricted=false}) => {
    const token = useSelector(selectToken)
    const shouldRedirect = token && restricted;
    return shouldRedirect ? <Navigate to="/" /> : children;
    //return token ? children : <Navigate to="/login"/>
}
export default PublicRoute;