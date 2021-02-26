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

const moveIn = keyframes`
    0% {
        transform: translateX(-20%);
    }
    50% {
        transform: translateX(0);
    }
    100% { 
        transform: translateX(-20%);
    }
`

const moveOut = keyframes`
    0 {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20%);
    }
    100% { 
        transform: translateX(0);
    }
`

export const CharacterWrapper = styled.div`
    height: 15rem;
    width: 45rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    overflow: hidden;
`

export const ImageWrapper = styled.div`
    flex: 40%;
    height: 100%;
    width: 30%;
    padding: 1rem;


    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
        filter: contrast(60%);
        transition: .6s ease-in-out;
        cursor: pointer;
        transform: scale(1);
        animation: 1.8s ${scaleIn} ease-in-out infinite;

        &:hover {
            filter: contrast(100%);
            transform: scale(1.1);
        }
    }
`

export const CharacterContent = styled.div`
    flex: 60%;
    padding: 2rem;
    color: #000;
    
    h1 {
        margin-bottom: 1rem;
        animation: 1.8s ${moveIn} ease-in-out infinite;
    }

    ul {
        animation: 2s ${moveOut} ease-in-out infinite;
    }
`