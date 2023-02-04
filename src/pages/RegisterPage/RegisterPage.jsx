import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Box, Container, display } from '@mui/system';
import { Div } from "./RegisterPage.style";
import { Browser } from 'react-kawaii';
const RegisterPage = () => {


    return (
         <Container maxWidth="sm" >
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center',  width:'100hv', p: '40px'}} >
 
                   <RegisterForm />
                   <Div> <Browser size={200} mood="lovestruck" color="#61DDBC" /></Div>
                  
                </Box>
         </Container>       
    )
}
export default RegisterPage;