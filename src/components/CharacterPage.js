import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CharacterPageWrapper } from '../styles/CharacterPage.elements'

const CharacterPage = () => {
    let { id } = useParams()
    const character = useSelector(state => state.charactersReducer.characters.find(character => character.id === parseInt(id)))

    return (
        <CharacterPageWrapper>
            <Link to='/'>Back</Link>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} /> 
            <h3>{character.gender}</h3>        
        </CharacterPageWrapper>
    )
}

export default CharacterPage
