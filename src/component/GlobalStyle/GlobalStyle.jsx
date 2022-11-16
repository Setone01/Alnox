import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --primary--color: #e0ebed;
        --alternative--color: #f6f8f9;
        --h1--text: #1c222d;
        --default--color: #3a3e3d;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat';
        background-color: var( --alternative--color);
        color: var(--default--color);
        }

`;
export default GlobalStyle;
