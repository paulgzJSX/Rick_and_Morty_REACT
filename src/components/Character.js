import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useClickOutside } from '../hooks/useClickOutside'
import { CharacterContent, CharacterWrapper, ImageWrapper } from '../styles/Character.elements'

const Character = ({ character }) => {
    const characterWrapperRef = useRef(null)
    let { id } = useParams()

    useClickOutside(characterWrapperRef)

    return (
        <CharacterWrapper ref={characterWrapperRef}>
            <ImageWrapper>
                <img src={character.image} alt={character.name} />
            </ImageWrapper>
            <CharacterContent>
                <h1>{character.name}</h1>
                <ul>
                    <li><strong>Gender:</strong> {character.gender}</li>
                    <li><strong>Species:</strong> {character.species}</li>
                    <li><strong>Status:</strong> {character.status}</li>
                    <li><strong>Location:</strong> {character.location.name}</li>
                </ul>
            </CharacterContent>

        </CharacterWrapper>
    )
}

export default Character
