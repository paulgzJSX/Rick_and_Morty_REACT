import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInfiniteScroll } from '../hooks/customHooks'
import { getCharacters } from '../store/actions/actions'
import { Card, Spinner } from './index' 
import { Cards } from '../styles/Card.elements'

const CardsGrid = () => {
    const bottomBoundaryRef = useRef(null)
    const dispatch = useDispatch()

    const { characters, isLoading } = useSelector(state => state.charactersReducer)
    const { page } = useSelector(state => state.pageReducer)
    const { error } = useSelector(state => state.errorReducer)
    
    useInfiniteScroll(bottomBoundaryRef, dispatch)

    useEffect(() => {
        dispatch(getCharacters())
    }, [page, dispatch])

    return (
        <Cards>
            {isLoading && <Spinner />}
            {error && <span>{error.toString()}</span>}
            {characters?.map(character =>
                <Card key={character.id} character={character} />)}
            <div ref={bottomBoundaryRef}></div>
        </Cards>
    )
}

export default CardsGrid
