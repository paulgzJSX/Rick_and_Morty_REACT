import styled, { css, keyframes } from 'styled-components'
import { flexSpaceBetween, widthHeight100 } from './GlobalStyles'
import { GoPrimitiveDot } from 'react-icons/go'

const Backface = css`
    position: absolute;
    ${widthHeight100};
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;    
`

const tremble = keyframes`
    0% { transform: translateX(-3%) }
    50% { transform: translateX(3%) }
    100% { transform: translateX(-3%) }
`

export const Cards = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const Wrapper = styled.div`
    cursor: pointer;
    background-color: transparent;
    height: 300px;
    perspective: 1000px;

    h1 {
        font-size: 25px;
        border-bottom: 1px #fff solid;
        padding-bottom: 10px;
        margin-bottom: 10px;        
    }

    img {
        ${widthHeight100};
        object-fit: cover;   
    }

    &:nth-of-type(3n) {
            animation: 3s ${tremble} ease infinite;
        }
`

export const Inner = styled.div`
    position: relative;
    ${widthHeight100};
    transition: transform 0.8s;
    transform-style: preserve-3d;   
    transform: ${props => props.rotate && 'rotateY(180deg)'}; 
`

export const Front = styled.div`
    position: relative;
    ${Backface}
`

export const CharacterStatus = styled.div`
    position: absolute;
    ${flexSpaceBetween};
    bottom: 5px;
    background-color: rgba(0,0,0,.4);
    width: 100%;
    color: #fff;
    text-align: right;
    padding: .5rem; 
`

export const Back = styled.div`
    ${flexSpaceBetween};
    flex-direction: column;
    background-color: #333;
    color: white;
    padding: 1.1rem 1.1rem 2rem;
    transform: rotateY(180deg);  
    ${Backface} 

    li {
        list-style: none;
        padding-bottom: 10px;        
    }
`

export const Content = styled.div``

export const Buttons = styled.div`
    width: 100%;
    ${flexSpaceBetween};
    padding: 0 1rem;

    button {
        width: 5rem;
        border: none;
        border-radius: 10px;
        font-family: inherit;
        cursor: pointer;
        padding: .5rem 1rem;
        opacity: .7;
        outline: none;
        transition: .3s ease;
        transform: scale(1);

        &:hover {
            background-color: #fff;
            transform: scale(1.2);
        }
    }
`

export const AliveIcon = styled(GoPrimitiveDot)`
    color: ${props => props.alive ? 'green' : 'red'};
`