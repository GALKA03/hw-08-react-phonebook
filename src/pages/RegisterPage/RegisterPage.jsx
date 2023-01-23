import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Box, Container } from '@mui/system';
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
         <Container maxWidth="sm">
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', p: '40px'}} >
 
                <RegisterForm />
                </Box>
         </Container>       
    )
}
export default RegisterPage;