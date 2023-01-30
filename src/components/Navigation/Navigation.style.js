import styled from "styled-components"

export const Nav = styled.nav`
display:flex;
justify-content:space-around;
//flex-wrap:wrap;
margin-right:20px;
flex-grow:1;

@media screen and (max-width: 750px) {
 /* display:block;
 text-align:center */
 flex-wrap:wrap;
 align-items:center;
 justify-content:center;
flex-direction:column;
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
/* margin-left:auto; */
font-size: 23px;
font-weight:400;
color:white;
@media screen and (max-width: 750px) {
text-align: center;
}
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
export const Div = styled.div`

`