import styled from 'styled-components'
import { flexCenter } from './GlobalStyles'

export const HeaderContainer = styled.header`
    height: 150px;
    perspective: 100px;  
    ${flexCenter}

    h1 {
        font-size: clamp(1rem, 5vw, 2.5rem);
        transition: transform 1.8s;
        transform-style: preserve-3d;        
    }

    &:hover h1 {
        transform: rotateX(360deg);        
    }
`