import styled, { keyframes } from 'styled-components'
import { flexCenter, widthHeight100, scaleIn } from './GlobalStyles'

const moveIn = keyframes`
    0% { transform: translateX(-20%) }
    50% { transform: translateX(0) }
    100% { transform: translateX(-20%) }
`

const moveOut = keyframes`
    0 { transform: translateX(0) }
    50% { transform: translateX(20%) }
    100% { transform: translateX(0) }
`

export const Wrapper = styled.div`
    height: 15rem;
    width: 45rem;
    border-radius: 1.2rem;
    ${flexCenter}
    background-color: #fff;
    overflow: hidden;
`

export const Image = styled.div`
    flex: 40%;
    height: 100%;
    width: 30%;
    padding: 1rem;

    img {
        ${widthHeight100};
        border-radius: 1.2rem;
        object-fit: cover;
        transition: .6s ease-in-out;
        cursor: pointer;
        transform: scale(1);
        animation: 1.8s ${scaleIn} ease-in-out infinite;
    }
`

export const Content = styled.div`
    flex: 60%;
    padding: 2rem;
    color: #000;
    
    h1 {
        margin-bottom: 1rem;
        animation: 1.8s ${moveIn} ease-in-out infinite;
        font-size: clamp(1.5rem, 3vw, 2rem);
    }

    ul {
        animation: 2s ${moveOut} ease-in-out infinite;
    }
`