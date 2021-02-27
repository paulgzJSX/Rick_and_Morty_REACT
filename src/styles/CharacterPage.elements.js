import styled, { keyframes } from 'styled-components'

const scaleIn = keyframes`
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

export const CharacterPageWrapper = styled.div`
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    border: 1px solid grey;
    padding: 1rem;
    animation: 2s ${scaleIn} ease-in-out infinite;

    h1 {
        margin-bottom: 1rem;
    }

    img {
        border-radius: 20px;
        animation: 2s ${scaleIn} ease-in-out infinite;
        margin-bottom: 1rem;
    }

    h3 {
        animation: 2s ${scaleIn} ease-in-out infinite;
    }
`