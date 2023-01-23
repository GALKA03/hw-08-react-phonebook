import styled from 'styled-components';
export const Conteiner = styled.div`
display: flex;
/* flex-wrap:wrap; */
flex-grow:1;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  max-width: 40%;
  padding:10px;
  flex-direction:row;
  align-items: flex-start;
  justify-content:space-around;
  font-size: 20px;
  background-color: antiquewhite;
  color: #010101;
border: 2px solid rgb(30, 149, 86);
&:hover{
color:green;
}
`;
export const Div = styled.div`
padding:40px;
`
