import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Box, Container, display } from '@mui/system';
import { Div } from "./RegisterPage.style";
import { Browser } from 'react-kawaii';
const RegisterPage = () => {
// const [showModal, setShowModal]= useState(true)
// useEffect(() => {
//     const modalKeyDown = ({ code }) => {
//       if (code === 'Escape') {
//       closeModal();
//       }
//        window.addEventListener('keydown', modalKeyDown);
//     }
//     return () => {
//       window.removeEventListener('keydown', modalKeyDown)
//     }
//   }, []) 
     
// const openModal = ()=> {
// setShowModal(true) 
// //   setLargeImageId(largeImageURL)
//    }
//   const closeModal = () => {
//      setShowModal(false);
//   };
//    const handleClickBackdrop = e => {
//       if (e.currentTarget === e.target) {
//      setShowModal(false);
//     }
     
//     }

    return (
         <Container maxWidth="sm"  sx={{ bgcolor: '#eef4ed' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height: '100vh', width:'100hv', p: '40px'}} >
 
                   <RegisterForm />
                   <Div> <Browser size={200} mood="lovestruck" color="#61DDBC" /></Div>
                  
                </Box>
         </Container>       
    )
}
export default RegisterPage;