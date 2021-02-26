import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Character } from './index'
import { displayBackdrop } from '../store/actions/actions'
import { CardBack, CardFront, CardInner, CardWrapper, CharacterStatus, AliveIcon, CardButtons } from '../styles/Card.elements'

const Card = ({ character }) => {
    const [displayBack, setDisplayBack] = useState(false)
    const dispatch = useDispatch()
    let history = useHistory()

    const handleClick = () => {
        console.log('clicked', character.id);
        // history.push(`/character:${character.id}`)
    }

    const handleBackdrop = () => {
        // console.log('backdrop clicked');
        dispatch(displayBackdrop(<Character character={character} />))
    }

    return (
        <CardWrapper onMouseOver={() => setDisplayBack(true)} onMouseOut={() => setDisplayBack(false)}>
            <CardInner rotate={+displayBack}>
                <CardFront>
                    <img src={character.image} alt={character.name} />
                    <CharacterStatus>
                        {character.status === 'Alive' ? <AliveIcon alive='true' /> : <AliveIcon />}
                        <p>{character.name}</p>
                    </CharacterStatus>
                </CardFront>
                <CardBack>
                    <h1>{character.name}</h1>
                    <ul>
                        <li><strong>Gender:</strong> {character.gender}</li>
                        <li><strong>Species:</strong> {character.species}</li>
                        <li><strong>Status:</strong> {character.status}</li>
                        <li><strong>Location:</strong> {character.location.name}</li>
                    </ul>
                    <CardButtons>
                        <button onClick={handleClick}>Page</button>
                        <button onClick={handleBackdrop}>Modal</button>
                    </CardButtons>

                </CardBack>
            </CardInner>
        </CardWrapper>
    )
}

export default Card
