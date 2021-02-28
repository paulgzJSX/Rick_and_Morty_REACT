import styled, { keyframes } from 'styled-components'
import { flexCenter, scaleIn } from './GlobalStyles'
import { Link } from 'react-router-dom'
import { ImSwitch } from 'react-icons/im'

const changeOut = keyframes`
    0% { transform: rotate(-10deg) }
    50% { transform: rotate(10deg) }
    100% { transform: rotate(-10deg) }
`

export const Wrapper = styled.div``

export const Mirrow = styled.div`
    width: 60vw;
    margin: 0 auto;
    text-align: center;
    border: 1px solid grey;
    border-radius: 50%;
    padding: 1rem;
    animation: 2s ${scaleIn} ease-in-out infinite;
    margin-bottom: 2.5rem;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }

    h2 {
        font-size: clamp(1rem, 3vw, 2rem);
    }

    img {
        border-radius: 1.2rem;
        animation: 4s ${changeOut} ease-in-out infinite;
        margin-bottom: 1rem;

        @media screen and (max-width: 600px) {
            width: 8rem;
            height: 8rem;
        }
    }
`

export const Footer = styled.div`
    width: 20vw;
    margin: 0 auto;
`

export const BackButton = styled(Link)`
    display: block;
    ${flexCenter};
    border-radius: 1.2rem;
    text-align: center;
    background-color: brown;
    color: #fff;
    padding: .7rem 2rem;
    transition: .6s ease-in-out;
    animation: 2s ${changeOut} ease-in-out infinite;

    &:hover {
        background-color: red;
    }

    span {
        @media screen and (max-width: 925px) {
            display: none;
        }
    }

    @media screen and (max-width: 425px) {
        padding: 1rem;
    }
`

export const SwitchIcon = styled(ImSwitch)`
    display: none;

    @media screen and (max-width: 925px) {
        display: block;
        font-size: 2rem;
    }
`