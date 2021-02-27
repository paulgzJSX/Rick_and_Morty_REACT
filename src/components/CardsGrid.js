import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { CharacterCard, Spinner } from './index'
import { Cards } from '../styles/Card.elements'

const CardsGrid = () => {
    const bottomBoundaryRef = useRef(null)

    const { characters } = useSelector(state => state.charactersReducer)
    const { isLoading } = useSelector(state => state.loaderReducer)
    const { error } = useSelector(state => state.errorReducer)

    useInfiniteScroll(bottomBoundaryRef)

    return (
        <Cards>
            {isLoading && <Spinner />}
            {error && <span>{error.toString()}</span>}
            {characters?.map(character =>
                <CharacterCard key={character.id} character={character} />)}
            <div ref={bottomBoundaryRef}></div>
        </Cards>
    )
}

export default CardsGrid
