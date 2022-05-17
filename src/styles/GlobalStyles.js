import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0 ;
        box-sizing: border-box ;
    }
    :root{
        --Dark-Blue: hsl(209, 23%, 22%);
        --Very-Dark-Blue: hsl(207, 26%, 17%);
        --White: hsl(0, 0%, 100%);
    }

    body{
        font-family: 'Nunito', sans-serif ;
        height: 100vh ;
        background-color: var(--Very-Dark-Blue);
    }
    input{
        background:none;
        outline: none ;
    }
    button{
        border: none;
        cursor:pointer ;
        font-family: "Nunito", sans-serif;
    }
`;
