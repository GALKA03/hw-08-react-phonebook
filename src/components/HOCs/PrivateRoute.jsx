import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";
import { Navigate } from "react-router-dom";
import { selectIsFetchCurrentUser,selectIsLoggedIn } from "redux/auth/authSelectors";

// export const PrivateRoute = ({ children }) => {
// const token=useSelector(selectToken)
//     return token ? children : <Navigate to="/login"/>
// }
//export default PrivateRoute;

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsFetchCurrentUser)

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
