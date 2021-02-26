import { Link } from 'react-router-dom'
import { HeaderContainer } from '../styles/Header.elements'

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'><h1>The Rick and Morty</h1></Link>
        </HeaderContainer>
    )
}

export default Header