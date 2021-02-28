import { createGlobalStyle, css, keyframes } from 'styled-components'

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

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const flexSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const widthHeight100 = css`
    width: 100%;
    height: 100%;
`

export const scaleIn = keyframes`
    0% {
        transform: scale(.7);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(.7);
    }
`