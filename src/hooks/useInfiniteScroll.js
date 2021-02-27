import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { moveToNextPage } from '../store/actions/actionCreators'

export const useInfiniteScroll = (scrollRef) => {
    const dispatch = useDispatch()

    const scrollObserver = useCallback(
        node => {
            new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) {
                        dispatch(moveToNextPage())
                    }
                })
            }).observe(node)
        }, [dispatch]
    )

    useEffect(() => {
        if (scrollRef.current) {
            scrollObserver(scrollRef.current)
        }
    }, [scrollObserver, scrollRef])
}