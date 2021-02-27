import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif !important;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #fff;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .container {
        max-width: 1100px;
        margin: auto;
        padding: 0 20px;        
    }
`