import { useRef } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import * as Modal from '../styles/Modal.elements'

const CharacterModal = ({ character }) => {
    const characterWrapperRef = useRef(null)

    useClickOutside(characterWrapperRef)

    return (
        <Modal.Wrapper ref={characterWrapperRef} data-aos='zoom-in'>
            <Modal.Image>
                <img src={character.image} alt={character.name} />
            </Modal.Image>
            <Modal.Content>
                <h1>{character.name}</h1>
                <ul>
                    <li><strong>Gender:</strong> {character.gender}</li>
                    <li><strong>Species:</strong> {character.species}</li>
                    <li><strong>Status:</strong> {character.status}</li>
                    <li><strong>Location:</strong> {character.location.name}</li>
                </ul>
            </Modal.Content>
        </Modal.Wrapper>
    )
}

export default CharacterModal
