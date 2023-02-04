import styled, { keyframes } from "styled-components";


const animateName = keyframes`
 0%{
    transition:translate(0,0);
    opasity:1;
}
100%{
    transition:translate(100%,0);
    opasity:0;
} `

export const Cont = styled.div`
display:flex;
justify-content:center;
align-items:center;
animation:${animateName} 1s;

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

