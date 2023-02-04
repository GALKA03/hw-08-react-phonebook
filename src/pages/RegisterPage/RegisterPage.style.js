import styled, { keyframes }from 'styled-components';

const animation = keyframes`
0%{
 transform: perspective(400px) rotateY(60deg)
}
100%{
 transform: perspective(400px) rotateY(-60deg);
}
`
export const Div = styled.div`
position:relative;
&:hover{
animation: ${animation}  3000ms infinite alternate backwards ease-in-out 1000ms;;

}


margin-top:50px;


`