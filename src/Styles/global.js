import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
}

body,input,button{
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}



:root{
height: 100vh;
/* as variaveis do css aqui */

}

`
