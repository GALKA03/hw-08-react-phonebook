import styled from "styled-components"

export const Nav = styled.nav`
display:flex;
`
export const MenuMain = styled.ul`
display:flex;
justify-content:center;
align-items:center;
margin-right:100px;
margin-left:auto;
font-size: 23px;
font-weight:400;
color:white;
`
export const Items = styled.li`
&:not(:last-child){
  margin-right:20px;  
}

`