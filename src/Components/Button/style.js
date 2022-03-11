import styled from "styled-components"




export const ButtonBlock = styled.button`
 color: ${(props) => props.color ? props.color : "red"};
 background-color:transparent ;
width: 110px;
height: 50px;

 box-sizing: border-box;
  border: 0px solid black;
  border-radius: 0.6em;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 0px 5px 0px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover{
    color: #fff;
  outline: 0;
  box-shadow:${(props) => props.boxShadow ? props.boxShadow : "0 0 40px 40px #228B22 inset"};
  }
  :focus{
    color: #fff;
  outline: 0;
  }
`
