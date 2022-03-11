import styled from "styled-components"

export const Header = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 30px;
box-shadow: 0px 0px 10px 0px grey;
background-color: #fff;

button{
    background-color: transparent;
    border: 0;
}

`

export const Container = styled.div`
/* background: #DCDCDC; */
background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#DCDCDC"};
`
export const CardItens = styled.div`
box-shadow: 0px 0px 10px 0px ;
width: 250px;
height: 250px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-content: space-around;
justify-content: space-around;
align-items: center;
`
