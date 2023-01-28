import { useSelector } from "react-redux";
//import { selectToken } from "redux/auth/authSelectors";
import { Navigate } from "react-router-dom";
import {selectIsLoggedIn } from "redux/auth/authSelectors";

// const PublicRoute = ({children, restricted=false}) => {
//     const token = useSelector(selectToken)
//     const shouldRedirect = token && restricted;
//     return shouldRedirect ? <Navigate to="/" /> : children;
//     //return token ? children : <Navigate to="/login"/>
// }
// export default PublicRoute;
export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    
    //const isRefreshing = useSelector(selectIsFetchCurrentUser)

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};