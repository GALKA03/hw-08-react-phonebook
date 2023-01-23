import { useEffect, useState } from "react";
import { Button,Modal } from "./Modal.style";
//import { Modal } from "@mui/material";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

const ModalRegister = () => {
    const [showModal, setShowModal]= useState(true)
useEffect(() => {
    const modalKeyDown = ({ code }) => {
      if (code === 'Escape') {
      closeModal();
      }
       window.addEventListener('keydown', modalKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', modalKeyDown)
    }
  }, []) 
     
const openModal = ()=> {
setShowModal(true) 
//   setLargeImageId(largeImageURL)
   }
  const closeModal = () => {
     setShowModal(false);
  };
   const handleClickBackdrop = e => {
      if (e.currentTarget === e.target) {
     setShowModal(false);
    }
     
    }
    return (
        <>
     <Button onClick={openModal}>Open modal</Button>
<Modal
  //open={open}
  onClose={closeModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
{/* <RegisterForm/> */}
            </Modal>
        </>
   ) 
}
