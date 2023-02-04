import styled, { keyframes } from "styled-components";


const animateName = keyframes`
 0% {
    transform: scale(0.75);
  }

  100% {
    transform: scale(1.25);
  }`

export const Cont = styled.div`
position: relative;
display:flex;
justify-content:center;
align-items:center;
&:hover{
 animation:${animateName} 3000ms infinite 1000ms;   
}
` 
const scale = keyframes`
from{
    color:teal;
}
to{
color:red;
}
`
export const Title = styled.h1`
animation:${scale} 1s infinite linear;
 text-align: center;
//margin-left:25%;
`

