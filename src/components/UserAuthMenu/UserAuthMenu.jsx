import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operations"
import { selectName, selectEmail } from "redux/auth/authSelectors"
import { Button } from "@mui/material"
import { Btn, conteinerLogOut, Text } from "./UserAuthMenu.style"
export const UserAuthMenu = () => {
    const dispatch = useDispatch()
const name = useSelector(selectName)
    const email = useSelector(selectEmail)
    return (
        <>
            
            <Text>{`WELCOME ${name}`}</Text>
           
            <Button onClick={() => dispatch(logout())} size="medium" variant='contained'  color='success'>logout</Button>
        </>
    )
}