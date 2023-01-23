import styled from "styled-components"
export const Modal = styled.div`
 display: block;
    position: absolute;
    width:400px;
    height: 500px;
    top: 50%;
    left: 50%;
    background-color: gray;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 4px;


`
export const Button = styled.button`
min-width:30px;
background-color:green;
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1200;
`