import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CharacterModal } from './index'
import { displayBackdrop } from '../store/actions/actionCreators'
import * as Card from '../styles/Card.elements'
import { AliveIcon } from '../styles/Card.elements'

const CharacterCard = ({ character }) => {
    const [displayBack, setDisplayBack] = useState(false)
    const dispatch = useDispatch()

    return (
        <Card.Wrapper onMouseOver={() => setDisplayBack(true)} onMouseOut={() => setDisplayBack(false)}>
            <Card.Inner rotate={+displayBack}>
                <Card.Front>
                    <img src={character.image} alt={character.name} />
                    <Card.CharacterStatus>
                        {character.status === 'Alive' ? <AliveIcon alive='true' /> : <AliveIcon />}
                        <p>{character.name}</p>
                    </Card.CharacterStatus>
                </Card.Front>
                <Card.Back>
                    <Card.Content>
                        <h1>{character.name}</h1>
                        <ul>
                            <li><strong>Gender:</strong> {character.gender}</li>
                            <li><strong>Species:</strong> {character.species}</li>
                            <li><strong>Status:</strong> {character.status}</li>
                            <li><strong>Location:</strong> {character.location.name}</li>
                        </ul>
                    </Card.Content>
                    <Card.Buttons>
                        <button>
                            <Link to={'/characters/' + character.id}>Page</Link>
                        </button>
                        <button
                            onClick={() => dispatch(displayBackdrop(<CharacterModal character={character} />))}
                        >
                            Modal
                        </button>
                    </Card.Buttons>
                </Card.Back>
            </Card.Inner>
        </Card.Wrapper>
    )
}

export default CharacterCard
