import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as Page from '../styles/Page.elements'
import { SwitchIcon } from '../styles/Page.elements'

const CharacterPage = () => {
    let { id } = useParams()
    const character = useSelector(state => state.charactersReducer.characters.find(character => character.id === parseInt(id)))

    return (
        <Page.Wrapper>
            <Page.Mirrow>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <h3>{character.gender}</h3>
                <h2>{character.location.name}</h2>
            </Page.Mirrow>
            <Page.Footer>
                <Page.BackButton to='/'>
                    <SwitchIcon />
                    <span>Back to the Gang</span>
                </Page.BackButton>
            </Page.Footer>
        </Page.Wrapper>
    )
}

export default CharacterPage
