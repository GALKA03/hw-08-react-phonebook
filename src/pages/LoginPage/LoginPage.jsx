import { LoginForm } from "components/LoginForm/LoginForm";
import { Box, Container } from '@mui/system';


const LoginPage = () => {
    return (
         <Container maxWidth="sm">
    <Box   /*sx={{ bgcolor: '#cfe8fc', height: '200vh' }}*/ >
 
                <LoginForm />
                </Box>
       </Container>          
    )
}
export default LoginPage;