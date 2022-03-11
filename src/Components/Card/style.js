import styled from "styled-components"

export const Divitem = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
justify-content: space-between;
align-items: center;
/* box-shadow: 0px 2px 0px 0px; */
width: 500px;
height: 220px;

img{
    width: 150px;
    height: 200px;
}
h3{
    font-size: 15px;
}


@media (max-width: 800px) {
    width: 90%;

    img{
    width: 100px;
    height: 150px;
}

}

`