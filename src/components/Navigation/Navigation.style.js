import styled from "styled-components"

export const Nav = styled.nav`
display:flex;
justify-content:space-around;
margin-right:20px;
flex-grow:1;

@media screen and (max-width: 750px) {
 display:block;
 
}
`
export const H1 = styled.h1`
@media screen and (max-width: 750px) {
 font-size: 20px;
font-weight:400;
}
color:white;
//display:inline-block;

`
export const MenuMain = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
/* margin-right:100px; */
margin-left:auto;
font-size: 23px;
font-weight:400;
color:white;

`
export const Items = styled.li`
/* @media screen and (max-width: 750px) {
 font-size: 20px;
font-weight:400;
} */
&:not(:last-child){
  margin-right:20px;  
}

`
