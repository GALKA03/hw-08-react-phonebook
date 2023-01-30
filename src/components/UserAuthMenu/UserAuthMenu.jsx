import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operations"
import { selectName} from "redux/auth/authSelectors"
import { Button, createTheme } from "@mui/material"
import { /*Btn, conteinerLogOut,*/ Text } from "./UserAuthMenu.style"
export const UserAuthMenu = () => {
    const dispatch = useDispatch()
const name = useSelector(selectName)
   const theme = createTheme({
  status: {
    danger: '#3ee544',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#348505',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
}); 
    return (
        <>
            
            <Text>{`WELCOME ${name}`}</Text>
           
            <Button type='button' onClick={() => dispatch(logout())} size="medium" variant='outlined'  /*color='success'*/ theme ={theme}><p>logout</p></Button>
        </>
    )
}