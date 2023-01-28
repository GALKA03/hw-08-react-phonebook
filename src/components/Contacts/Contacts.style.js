import styled from 'styled-components';
export const ContactsConteiner = styled.ul`
position: relative;
background-color:transparent;
color:black;
&:hover {
    background-color:rgb(200, 205, 201);
    color: green;
  }
`
export const Item = styled.li`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
height:auto;
list-style: none;
padding: 0px 10px;
&:hover {
    background-color:rgb(200, 205, 201);
    color: green;
  }

 /* &:nth-child(2n) {
  background-color: rgb(210, 254, 219); */
   
//}
//word-spacing:10px;

`
export const Btn = styled.button`
display:block;
background-color: transparent;
border-radius:10%;
cursor: pointer;
border:none;
width:auto;
height:auto;
margin-left:auto;
margin-right:20px;
font-size:20px;
color: black;
&:hover {
    color: red; // <Thing> when hovered
  }

`
export const BtnUpdate = styled.button`
background-color:transparent;
margin-left:auto;
border:none;
&:hover {
    color: greenyellow;
     // <Thing> when hovered
  }
`
export const Contact = styled.p`
font-size:16px;
font-weight:400;

`
export const Span = styled.span`
font-size:16px;
font-weight:400;
line-height:1;
margin-right:20px;
`
export const Img = styled.img`
width:40px;
height:40px;
` 
export const ContainerBtn =styled.div `
display:flex;

`