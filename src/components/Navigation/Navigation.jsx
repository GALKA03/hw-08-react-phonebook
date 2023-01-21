import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSelectors";

const Navigation = () => {
    const token = useSelector(selectToken)
    //console.log(token)
    return (
        <nav>
            <ul>
                                  <li>
                    <NavLink to="/">Home</NavLink>
                </li>
              
                {token && <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>}
               
            </ul>
        </nav>
    )
}
export default Navigation;