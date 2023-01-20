import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operations"
import { selectName } from "redux/auth/authSelectors"


export const UserAuthMenu = () => {
    const dispatch = useDispatch()
const name = useSelector(selectName)
    
    return (
        <>
            <p>{`WELCOME ${name}`}</p>
            <button onClick={()=>dispatch(logout())}>logout</button>
        </>
    )
}